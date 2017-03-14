import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewEvent from './lib/NewEvent'
import UpdateEvent from './lib/UpdateEvent'
import './index.css';
import { Router, Route, IndexRoute, Link } from 'react-router'
import createHistory from 'history/createBrowserHistory'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const browserHistory = createHistory()
const route = (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={App}/>
      <Route path="/updateEvent/:id" component={UpdateEvent}/>
      <Route path="/newEvent" component={NewEvent}/>
    </div>
  </Router>
)
ReactDOM.render(
  <MuiThemeProvider>
  {route}
  </MuiThemeProvider>,
  document.getElementById('root')
);
