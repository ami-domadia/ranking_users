import React, { Component } from 'react';
import User from './User';

const UserList = (props) => {

        const users = props.users;
        return (
            <div>
                <ul className="list-group" >
                { users.map(user => <User user={user} key={user.id} editUser={props.editUser} deleteUser={props.deleteUser} />) }
                </ul>
            </div>
        );
}

export default UserList;

