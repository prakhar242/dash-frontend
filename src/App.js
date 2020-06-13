import React, {Component}  from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavigationBar  from './components/NavigationBar';
import  Home  from './Props/Home';
import  Login  from './components/Login/login';
import Sidebar from './components/Sidebar';
import  Jumbotron  from './components/jumbotron';
import tenant from './Props/tenant/tenant'

const initialState = {
  route: 'login',
  isLoggedIn: false,
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if (route === 'logout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isLoggedIn: true})
    }
    this.setState({route: route});
  }
  render () {
    const { isLoggedIn, route} = this.state;
  return (
    <div>
      <NavigationBar isLoggedIn={this.state.isLoggedIn} onRouteChange={this.onRouteChange} />
      { route === 'home'? 
      <div>
      <Router>
        <Jumbotron/>
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tenants" component={tenant} />
          <Route component={Home} />
        </Switch>
      </Router>
      </div>
      :
      <div>
       <Login onRouteChange={this.onRouteChange} isLoggedIn={this.state.isLoggedIn}/>
      </div>
  }
  </div>
  );
}
}

export default App;
