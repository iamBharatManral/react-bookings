import data from "../../static.json";
import styles from "./BookablesList.module.css"
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
import Picker from "../../atoms/Picker/Picker";
import Button from "../../atoms/Button/Button";

const BookablesList = () => {
    const [group, setGroup] = useState("Kit")
    const [bookableId, setBookableId] = useState(0)
    const [hasDetails, setHasDetails] = useState(false)
    const bookables = data.bookables.filter(b => b.group === group);
    const groups = [...new Set(data.bookables.map(b => b.group))]
    const nextBookable = () => setBookableId(current => (current + 1) % bookables.length)
    const selectBookable = roomId => setBookableId(roomId)
    const selectGroup = e => {
        setBookableId(0)
        setGroup(e.target.value)
    }
    const toggleDetails = () => setHasDetails(prev => !prev)

    return (
        <div className={styles.bookables}>
            <div className={styles.list}>
                <Picker onChange={selectGroup} value={group}>
                    {groups.map(g => (<option value={g} key={g}>{g}</option>))}
                </Picker>
                {bookables
                    .map((bookable, id) =>
                        (<Button key={bookable.id} className={id === bookableId ? "selected" : ""}
                                 onClick={() => selectBookable(id)}>{bookable.title}</Button>)
                    )
                }
                <Button type={"button"} onClick={nextBookable} link={true}>Next<FaArrowRight/></Button>
            </div>
            {bookables.filter((bookable, id) => id === bookableId)
                .map((bookable, id) => (<div className={styles.title} key={id}>
                        <div className={styles.header}>
                            <h2>{bookable.title}</h2>
                            <label htmlFor="details">Show Details <input type="checkbox" id={"details"}
                                                                         onChange={toggleDetails}/></label>
                        </div>
                        <hr/>
                        <div className={styles.content}>
                            <div className={styles.notes}>{bookable.notes}</div>
                            <hr/>
                            {hasDetails && (
                                <div className={styles.details}>
                                    <ul>
                                        {bookable.days.sort().map(
                                            d => (<li key={d}>{data.days[d]}</li>)
                                        )}
                                    </ul>
                                    <ul>
                                        {bookable.sessions.sort().map(
                                            d => (<li key={d}>{data.sessions[d]}</li>)
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default BookablesList;
