import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  browserHistory
} from 'react-router-dom'

import NavBar from './components/Navigation/NavBar.jsx';
import MyRoutes from './components/Navigation/MyRoutes.jsx';
import authHelper from '../../lib/AuhenticationHelper.js';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAuthenticated: false,
      user: {}
    }
  }

  authenticateUser(userObj) {
    console.log('setting user in index.jsx: ', userObj);
    if (userObj) {
      this.setState(
        {
          isAuthenticated: true,
          user: userObj
        }
      )
    } else {
      this.setState(
        {
          isAuthenticated: false,
          user: {}
        }
      )
    }
  
  }

  setUserObject(userObj) {
    this.setState( {user: userObj} );
  }

  isUserAuthenticated() {
    return this.state.isAuthenticated
  }

  componentDidMount() {
    console.log('index.jsx token?', window.authToken);
  }

  render() {
    console.log('Rendering login.jsx', this.props);
    const currentUser = this.state.user;
    return (
      <Router history={browserHistory} >
        <div>
          <NavBar isAuthenticated={this.isUserAuthenticated.bind(this)} username={this.state.user.username} authenticateUserFunc={this.authenticateUser.bind(this)} />
          <MyRoutes isAuthenticated={this.isUserAuthenticated.bind(this)} authenticateUserFunc={this.authenticateUser.bind(this)} currentUser={currentUser} setUserObject={this.setUserObject.bind(this)} />
        </div>
      </Router>
    )
  }
} 

ReactDOM.render(<App />, document.getElementById('app'));
