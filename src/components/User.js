import React from 'react';

export default function User (props) {

  const user = props.user;

  return (
    <div id='user'>
        <li className="list-group-item">
            <h4>Name: { user.name }</h4>
            <h4>Bio: {user.bio}</h4>
            <h4>Rank: {user.rank}</h4>
            <button onClick={()=>props.deleteUser(user.id)} className="btn btn-danger btn-sm">DELETE</button> <br/>
        </li>
    </div>
  
  );
}
