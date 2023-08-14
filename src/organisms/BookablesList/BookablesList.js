import styles from "./BookablesList.module.css"
import Button from "../../atoms/Button/Button";
import {FaArrowRight} from "react-icons/fa";
import React, {useRef} from "react";
import Picker from "../../atoms/Picker/Picker";


const BookablesList = ({state, dispatch}) => {
    const nextButtonRef = useRef();
    const {data: {bookables}, group, bookableId} = state;
    const bookablesForAGroup = bookables.filter(bookable => bookable.group === group)
    const groups = bookables && [...new Set(bookables.map(b => b.group))]
    return (
        <div className={styles.bookables}>
            <Picker onChange={(e) => dispatch({type: "SELECT_GROUP", payload: e.target})} value={group}>
                {groups.map(g => (<option value={g} key={g}>{g}</option>))}
            </Picker>
                {bookablesForAGroup
                    .map((bookable, id) =>
                        (<Button key={bookable.id} className={id === bookableId ? "selected" : ""}
                                 onClick={() => dispatch({type: "SELECT_BOOKABLE", payload: {id, nextButton: nextButtonRef}})}>{bookable.title}</Button>)
                    )
                }
            <Button type={"button"} onClick={() => dispatch({type: "NEXT_BOOKABLE", payload: nextButtonRef})} link={"true"} innerref={nextButtonRef} autoFocus>Next<FaArrowRight/></Button>
        </div>
    )
};

export default BookablesList;
