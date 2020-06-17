import React from 'react';
import './login.css';
import axios from 'axios';

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInuserName: '',
      signInPassword: ''
    }
  }
  

  onuserNameChange = (event) => {
    this.setState({signInuserName: event.target.value})
    
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }
  


  onSubmitSignIn = () => {
    if(this.state.signInuserName === "dbUser") {
      if(this.state.signInPassword === "Prakhi24")
      this.props.onRouteChange('home');
    }
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <div class="wrapper">
	<div class="contain">
		<h1>Welcome</h1>
		
		<form class="form">
			<input type="text" placeholder="Username" onChange={this.onuserNameChange}/>
			<input type="password" placeholder="Password" onChange={this.onPasswordChange}/>
			<button type="submit" id="login-button" onClick={this.onSubmitSignIn}>Login</button>
		</form>
	</div>
</div>
        

    );
  }
}

export default login;