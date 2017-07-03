import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router';
import { Popup, Button, Image, Modal } from 'semantic-ui-react'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Rendering NavBar');

    let profileLink = '';
    if (!this.props.isAuthenticated()) {
      profileLink = '';
    } else {
      profileLink = <Link to={'/profile/'+this.props.username}>Profile</Link>;
    }
    
    return (
     <div>
      <nav>
        <ul>
          <li>{this.props.isAuthenticated() && <Link to={'/trips/'+this.props.username}>Trips</Link>}</li>
          <li>{!this.props.isAuthenticated() && <Link to="/login">Login</Link>}</li>
          <li>{!this.props.isAuthenticated() && <Link to="/signup">Sign Up</Link>}</li>
          <li><Link to="/">Search</Link></li>
          <li><Link to={'/newtrip'}>New Trip</Link></li>
          <li>{this.props.isAuthenticated() && <Link to={'/profile/'+this.props.username}>Profile</Link>}</li>
          <Popup
          trigger={<Image src='./toad_icon.jpeg' size='tiny' shape='circular' />}
          content={<Button color='red' icon='flask' content='Activate the "Marcus Protocol"' />}
          on='click'
          position='top right'
          /> 
        </ul>
      </nav>
    </div>
    )
  }
}

export default withRouter(NavBar);