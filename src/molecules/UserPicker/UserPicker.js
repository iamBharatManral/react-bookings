import React from 'react';
import Picker from "../../atoms/Picker/Picker";
import data from "../../static.json";

function UserPicker(props) {
    return (
        <Picker>
            {data.users.map(user =>
                (<option value={user.name} key={user.id}>{user.name}</option>)
            )}
        </Picker>
    );
}

export default UserPicker;
