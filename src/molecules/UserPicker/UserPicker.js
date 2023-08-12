import React, {useEffect, useState} from 'react';
import Picker from "../../atoms/Picker/Picker";
import getUsers from "../../utils/dao/getUsers";

function UserPicker(props) {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        getUsers()
            .then(data => setUsers(data.users))
    }, [])
    return (
        <Picker>
            {users && users.map(user =>
                (<option value={user.name} key={user.id}>{user.name}</option>)
            )}
        </Picker>
    );
}

export default UserPicker;
