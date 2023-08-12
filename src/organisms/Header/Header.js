import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "../../atoms/Link/Nav";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import styles from './Header.module.css'
import UserPicker from "../../molecules/UserPicker/UserPicker";
import BookingsPage from "../../pages/Bookings/Bookings";
import BookablesPage from "../../pages/Bookables/Bookables";
import UsersPage from "../../pages/Users/Users";
import Home from "../../pages/Home/Home";

const Header = () => {
    return (
        <Router>
            <header>
                <div className={styles.title}>
                    <h1><a href="/" className={styles.home}>Reservations</a></h1>
                    <p>&ldquo;Where comfort and adventure intertwine to create unforgettable moments.&rdquo;</p>
                </div>
                <div className={styles.navigation}>
                    <nav className={styles.nav}>
                        <Nav path={"/bookings"} text={"Bookings"} icon={<FaCalendarAlt/>}></Nav>
                        <Nav path={"/bookables"} text={"Bookables"} icon={<FaDoorOpen/>}></Nav>
                        <Nav path={"/users"} text={"Users"} icon={<FaUsers/>}></Nav>
                    </nav>
                    <UserPicker/>
                </div>
            </header>
            <Routes>
                <Route path={"/bookings"} element={<BookingsPage/>}/>
                <Route path={"/bookables"} element={<BookablesPage/>}/>
                <Route path={"/users"} element={<UsersPage/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Routes>
        </Router>
    );
};

export default Header;
