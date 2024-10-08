import React from 'react';
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import styles from './BookableDetails.module.css'

const BookableDetails = ({state, dispatch}) => {
    const {data: {bookables, sessions, days}, group, bookableId, hasDetails} = state;
    return (
        <div>
            {bookables
                .filter((bookable) => bookable.group === group)
                .filter((bookable, id) => id === bookableId )
                .map((bookable, id) => (<div className={styles.details} key={id}>
                        <div className={styles.header}>
                            <h2>{bookable.title}</h2>
                            <div className={styles.arrow}>{hasDetails ? <FaArrowDown onClick={() => dispatch({type: "TOGGLE_DETAILS"})}/> : <FaArrowUp onClick={() => dispatch({type: "TOGGLE_DETAILS"})}/>}</div>
                        </div>
                        <hr/>
                        <div className={styles.content}>
                            <div className={styles.notes}>{bookable.notes}</div>
                            <hr/>
                            {hasDetails && (
                                <div className={styles.bookingsAndSessions}>
                                    <div className={styles.bookings}>Bookings</div>
                                    <ul>
                                        {bookable.days.sort().map(
                                            d => (<li key={d}>{days[d]}</li>)
                                        )}
                                    </ul>
                                    <div className={styles.sessions}>Sessions</div>
                                    <ul>
                                        {bookable.sessions.sort().map(
                                            d => (<li key={d}>{sessions[d]}</li>)
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

export default BookableDetails;
