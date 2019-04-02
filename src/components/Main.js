import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchUsers, deleteUser, editUser } from '../store';
import Nav from './Nav';
import UserList from './UserList';
import UserForm from './UserForm';
import { Home } from './Home';

class Main extends Component {
  constructor(props){
    super(props);
  }

  async componentDidMount () {
      await this.props.getAllUsers();  
  }

  render () {
    let toprank = 100;
    this.props.users.forEach((user)=>{
      if(user.rank<toprank){
        toprank = user.rank;
      }
    });
    console.log('toprank is', toprank);
    const toplist = this.props.users.filter((user)=>user.rank===toprank);
    console.log('toplist is', toplist);
    return (
      <div>
        <main>
          <h1>ACME User Ranking - built by Ami</h1>
          
            <Route render={(({location, count, topcount})=>
                                    Nav({location, count: this.props.users.length, toplist: toplist}))}/>
            <Route exact path='/users' render={(()=>UserList({users: this.props.users, editUser:this.props.editUser, deleteUser:this.props.deleteUser}))} />
            <Route path='/users/topRanked' render={(()=>UserList({users: toplist, editUser:this.props.editUser, deleteUser:this.props.deleteUser}))} />
            <Route path='/users/create' component={UserForm}/>
            {/* <Route path='/users/edit' render={({location})=>UserForm({location})}/> */}
            <Route exact path='/' render={()=>Home({count: this.props.users.length})} />
    
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {users : state.users};
}

const mapDispatchToProps =  (dispatch)=>{
 return {
      getAllUsers: () => dispatch(fetchUsers()),
      deleteUser: (id) => dispatch(deleteUser(id)),
      editUser: (id, user) => dispatch(editUser(id, user))
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


