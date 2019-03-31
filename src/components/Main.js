import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchUsers, deleteUser } from '../store';
import Nav from './Nav';
import UserList from './UserList';
import NewUser from './NewUser';
import { Home } from './Home';

class Main extends Component {
  constructor(props){
    super(props);
  }

  async componentDidMount () {
      await this.props.getAllUsers();  
  }

  render () {
    let toprank = this.props.users.reduce((acc, user)=>{
      if(user.rank*1 > acc){
        return acc = user.rank*1;
      }}, -1);
    console.log('toprank is', toprank);
    const toplist = this.props.users.filter((user)=>user.rank*1===toprank);
    console.log('toplist is', toplist);
    return (
      <div>
        {/* <Sidebar />
        <Navbar /> */}
        <main>
          <h1>ACME User Ranking - built by Ami</h1>
          
            <Route render={(({location, count, topcount})=>
                                    Nav({location, count: this.props.users.length, toplist: toplist}))}/>
            <Route exact path='/users' render={(()=>UserList({users: this.props.users, deleteUser:this.props.deleteUser}))} />
            <Route path='/users/topRanked' render={(()=>UserList({users: toplist, deleteUser:this.props.deleteUser}))} />
            <Route path='/users/create' component={NewUser}/>
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
      deleteUser: (id) => dispatch(deleteUser(id))
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


