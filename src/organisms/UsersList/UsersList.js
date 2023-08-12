import styles from "./UsersList.module.css"
import {Fragment, useEffect, useState} from "react";
import Button from "../../atoms/Button/Button";
import getUsers from "../../utils/dao/getUsers";
import Spinner from "../../atoms/Spinner/Spinner";

const UsersList = () => {
    const [currentUser, setCurrentUser] = useState("Mark")
    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data.users))
    }, [])
    const changeUser = e => setCurrentUser(e.target.innerText)

    return users ? (<div className={styles.container}>
        <div className={styles.users}>
            {users && users
                .map(user =>
                    <Button key={user.id} onClick={changeUser} className={user.name === currentUser ? "selected" : ""}
                    >{user.name}</Button>)}
        </div>
        <div className={styles.details}>
            {users && users
                .filter(user => user.name === currentUser)
                .map(user => (<Fragment key={user.id}>
                    <h2>{user.name}</h2>
                    <div className={styles.content}>
                        <div className={styles.title}>{user.title}</div>
                        <hr/>
                        <div className={styles.notes}>{user.notes}</div>
                    </div>
                </Fragment>))}
        </div>
    </div>) : <Spinner text={"Loading Users"}/>;
};

export default UsersList;
