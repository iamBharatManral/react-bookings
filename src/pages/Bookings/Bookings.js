import React from 'react';
import styles from './Bookings.module.css'
import WeekPicker from "../../organisms/WeekPicker/WeekPicker";
const BookingsPage = (props) => (
    <main className={styles.container}>
        <WeekPicker date={new Date()}/>
    </main>
);

export default BookingsPage;
