import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Nav from "../../atoms/link/Link";
import {FaCalendarAlt, FaDoorOpen, FaUsers} from "react-icons/fa";
import styles from './Header.module.css'
import UserPicker from "../../molecules/UserPicker/UserPicker";
import BookingsPage from "../../pages/Bookings/Bookings";
import BookablesPage from "../../pages/Bookables/Bookables";
import UsersPage from "../../pages/Users/Users";

const Header = () => {
    return (
        <Router>
            <header>
                <nav className={styles.nav}>
                    <Nav path={"/bookings"} text={"Bookings"} icon={<FaCalendarAlt/>}></Nav>
                    <Nav path={"/bookables"} text={"Bookables"} icon={<FaDoorOpen/>}></Nav>
                    <Nav path={"/users"} text={"Users"} icon={<FaUsers/>}></Nav>
                </nav>
                <UserPicker/>
            </header>
            <Routes>
                <Route path={"/bookings"} element={<BookingsPage/>}/>
                <Route path={"/bookables"} element={<BookablesPage/>}/>
                <Route path={"/users"} element={<UsersPage/>}/>
            </Routes>
        </Router>
    );
};

export default Header;
