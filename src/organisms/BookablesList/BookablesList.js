import styles from "./BookablesList.module.css"
import Button from "../../atoms/Button/Button";
import {FaArrowRight} from "react-icons/fa";
import React from "react";
import Picker from "../../atoms/Picker/Picker";


const BookablesList = ({bookables, selectBookable, bookableId, group, selectGroup, groups, nextBookable, nextButtonRef}) => {
    const bookablesForAGroup = bookables.filter(bookable => bookable.group === group)
    return (
        <div className={styles.bookables}>
            <Picker onChange={selectGroup} value={group}>
                {groups.map(g => (<option value={g} key={g}>{g}</option>))}
            </Picker>
                {bookablesForAGroup
                    .map((bookable, id) =>
                        (<Button key={bookable.id} className={id === bookableId ? "selected" : ""}
                                 onClick={() => selectBookable(id)}>{bookable.title}</Button>)
                    )
                }
            <Button type={"button"} onClick={nextBookable} link={"true"} innerref={nextButtonRef} autoFocus>Next<FaArrowRight/></Button>
        </div>
    )
};

export default BookablesList;
