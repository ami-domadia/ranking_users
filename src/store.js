import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';
// import socket from './socket';

const GOT_USERS_FROM_SERVER = 'GOT_USERS_FROM_SERVER';

const initialState = {
    users: []
};

const gotUsersFromServer = (users) => {
    return {
        type: GOT_USERS_FROM_SERVER,
        users
    }
}

const fetchUsers = () => async (dispatch) => {
    try{
        const response = await axios.get('/api/users');
        console.log(response);
        const users = response.data;
        const action = gotUsersFromServer(users);
        dispatch(action);
    }
    catch(error){
        console.log(error);
    }
}

const createUser = (user) => (dispatch) => {
    axios.post(`/api/users`, user)
    .then(()=>axios.get('/api/users'))
    .then((response)=>{const action = gotUsersFromServer(response.data); return action;})
    .then((action)=>dispatch(action))
    .catch((err)=>console.log(err))
}

const deleteUser = (id) => (dispatch) => {
    axios.delete(`/api/users/${id}`)
    .then(()=>axios.get('/api/users'))
    .then((response)=>{const action = gotUsersFromServer(response.data); return action;})
    .then((action)=>dispatch(action))
    .catch((err)=>console.log(err))
}

function reducer(state=initialState, action){
    switch(action.type){
        case GOT_USERS_FROM_SERVER: return {...state, users: action.users};
        default: return state;
    };
}

export {
    fetchUsers,
    deleteUser,
    createUser,
    gotUsersFromServer
}

export default createStore(reducer, applyMiddleware(thunkMiddleware));