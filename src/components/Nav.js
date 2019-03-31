import React from 'react'
import {Link} from 'react-router-dom'

const Nav = ({location, count, toplist}) => {
    const pathname = location.pathname
    return (
        <ul className='nav nav-tabs'>
            <li key='Home' className={`nav-link ${pathname==='/'? 'active':''}`}>
                <Link to='/'>Home</Link>
            </li>            
            <li key='users'> 
                <Link to='/users' className={`nav-link ${pathname==='/users'? 'active':''}`}>Users ({count}) </Link>
            </li>
            <li key='create'> 
                <Link to='/users/create' className={`nav-link ${pathname==='/users/create'? 'active':''}`}>Create</Link>
            </li>
            <li key='topRanked'> 
                <Link to='/users/topRanked' className={`nav-link ${pathname==='/users/topRanked'? 'active':''}`}>TopRanked {toplist.map(user=>user.name)}</Link>
            </li>
        </ul>
    )
}

export default Nav