/*global $*/
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { HashRouter as Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
// import { Router, Route, IndexRoute, hashHistory } from 'react-router-dom';
// import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { NotFound, Home  } from './pages';
import { Container } from './components';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
// import { Title, Tabs } from './components';

//Root sass file for webpack to compile
import './sass/main.scss';

//Initial Default settings 
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*  */}
        <Router history={hashHistory}>
          <Route path='/' component={Container} >
            <IndexRoute component={Home} />
            <Route path='*' component={NotFound} />

          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

