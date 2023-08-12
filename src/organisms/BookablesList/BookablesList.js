import styles from "./BookablesList.module.css"
import {useEffect, useState} from "react";
import {FaArrowDown, FaArrowRight, FaArrowUp} from "react-icons/fa";
import Picker from "../../atoms/Picker/Picker";
import Button from "../../atoms/Button/Button";
import getBookables from "../../utils/dao/getBookables";
import Spinner from "../../atoms/Spinner/Spinner";

const BookablesList = () => {
    const [data, setData] = useState(null)
    const [group, setGroup] = useState("Kit")
    const [bookableId, setBookableId] = useState(0)
    const [hasDetails, setHasDetails] = useState(false)
    const bookables = data && data.bookables.filter(b => b.group === group);
    const groups = data && [...new Set(data.bookables.map(b => b.group))]

    useEffect(() => {
        getBookables()
            .then(data => setData(data))
    })
    const nextBookable = () => setBookableId(current => (current + 1) % bookables.length)
    const selectBookable = roomId => setBookableId(roomId)
    const selectGroup = e => {
        setBookableId(0)
        setGroup(e.target.value)
    }
    const toggleDetails = () => setHasDetails(prev => !prev)

    return data ? (
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
                <Button type={"button"} onClick={nextBookable} link={"true"}>Next<FaArrowRight/></Button>
            </div>
            {bookables
                .filter((bookable, id) => id === bookableId)
                .map((bookable, id) => (<div className={styles.title} key={id}>
                        <div className={styles.header}>
                            <h2>{bookable.title}</h2>
                            <div className={styles.arrow}>{hasDetails ? <FaArrowDown onClick={toggleDetails}/> : <FaArrowUp onClick={toggleDetails}/>}</div>
                        </div>
                        <hr/>
                        <div className={styles.content}>
                            <div className={styles.notes}>{bookable.notes}</div>
                            <hr/>
                            {hasDetails && (
                                <div className={styles.details}>
                                    <div className={styles.bookings}>Bookings</div>
                                    <ul>
                                        {bookable.days.sort().map(
                                            d => (<li key={d}>{data.days[d]}</li>)
                                        )}
                                    </ul>
                                    <div className={styles.sessions}>Sessions</div>
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
    ) : <Spinner/>;
};

export default BookablesList;
