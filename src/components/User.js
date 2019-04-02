import React from 'react';
import {Link} from 'react-router-dom';
import UserForm from './UserForm.js';

export default function User (props) {

  const user = props.user;

  return (
    <div id='user'>
        <li className="list-group-item">
            <h4>Name: { user.name }</h4>
            <h4>Bio: {user.bio}</h4>
            <h4>Rank: {user.rank}</h4>
            {/* <button onClick={()=>props.editUser(user.id, user)} className="btn btn-primary btn-sm">EDIT</button>  */}
            {/* <Link to='/users/edit/'>Edit</Link> */}
            <UserForm user={user} />
            <button onClick={()=>props.deleteUser(user.id)} className="btn btn-danger btn-sm">DELETE</button> <br/>
        </li>
    </div>
  
  );
}
