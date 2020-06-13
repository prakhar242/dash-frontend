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
      <article className="br3 ba b--black-10 mv4 w-50 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Log In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="username"
                  name="username"
                  id="username"
                  onChange={this.onuserNameChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default login;