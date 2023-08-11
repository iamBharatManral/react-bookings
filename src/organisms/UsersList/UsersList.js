import data from "../../static.json";
import styles from "./UsersList.module.css"
import {Fragment, useState} from "react";
import Button from "../../atoms/Button/Button";

const UsersList = () => {
    const [currentUser, setCurrentUser] = useState("Mark")
    const changeUser = e => setCurrentUser(e.target.innerText)

    return (<div className={styles.container}>
        <div className={styles.users}>
            {data.users
                .map(user =>
                    <Button key={user.id} onClick={changeUser} className={user.name === currentUser ? "selected" : ""}
                    >{user.name}</Button>)}
        </div>
        <div className={styles.details}>
            {data.users
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
    </div>);
};

export default UsersList;
