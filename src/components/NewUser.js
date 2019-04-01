import React, {Component} from 'react';
import {connect} from 'react-redux';
import { createUser } from '../store';


class NewUser extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      bio: '',
      rank: 100
    }
    
    this.onHandleSubmit=this.onHandleSubmit.bind(this);
    this.onHandleChange=this.onHandleChange.bind(this);
  }

  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.createNewUser({name: this.state.name, bio: this.state.bio, 
        rank: this.state.rank});
  }

  onHandleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  render (func) {
    return (
      <div>
      <form>
        <div>
        <label htmlFor='name'>Name</label>
        <input className="form-control"
          name='name' type='text'
          value={this.state.name}
          onChange={this.onHandleChange}
        />
        </div>
        <div>
        <label htmlFor='bio'>Bio</label>
        <input className="form-control"
          name='bio' type='text' 
          value={this.state.bio}
          onChange={this.onHandleChange}
        />
        </div>
        <div>
        <label htmlFor='rank'>Rank [1-100]</label>
        <input className="form-control"
          name='rank' type='number' min="0" max="100" 
          value={this.state.rank}
          onChange={this.onHandleChange}
        />
        </div>
        <br/>
        <button onClick={this.onHandleSubmit} className="btn btn-primary">Submit</button>
      </form>
      </div>
    )
  }
}

const mapDispatchToProps =  (dispatch) => {
    return {
         createNewUser: (user) => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(NewUser);
