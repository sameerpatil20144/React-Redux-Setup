import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
// import Register from './components/Register';
import store from "./store";
import { Provider } from "react-redux";


class App extends Component {
  render(){
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path="/" component={Login}></Route>
              {/* <Route path="/register" component={Register}></Route> */}
            </Switch>
          </Router>
        </Provider>
      )
  }
}


export default App;
