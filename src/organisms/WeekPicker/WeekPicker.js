import React, {useReducer, useState} from 'react';
import weekReducer from "../../reducers/weekReducer";
import {getWeek} from "../../utils/dateWrangler";
import styles from './WeekPicker.module.css'
import {FaArrowLeft, FaArrowRight, FaCalendar} from "react-icons/fa";
import Button from "../../atoms/Button/Button";

const WeekPicker = ({date}) => {
    const [week, dispatch] = useReducer(weekReducer, date, getWeek)
    const [dateText, setDateText] = useState(() => getWeek(new Date()))
    return (
        <div className={styles.container}>
            <div className={styles.picker}>
                <Button onClick={() => dispatch({type: "PREV_WEEK"})}>
                    <FaArrowLeft/>
                    Prev
                </Button>
                <div className={styles.setDate}>
                    <input type="text" onChange={(e) => setDateText(e.target.value)}/>
                    <Button onClick={() => dispatch({type: "SET_DATE", payload: dateText})}>
                        <FaCalendar/>
                        Go
                    </Button>
                </div>
                <Button onClick={() => dispatch({type: "NEXT_WEEK"})}>
                    Prev
                    <FaArrowRight/>
                </Button>
            </div>
            <p>
                {week.start.toDateString()} - {week.end.toDateString()}
            </p>
        </div>
    );
};

export default WeekPicker;
