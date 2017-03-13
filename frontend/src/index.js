import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NewEvent from './lib/NewEvent'
import './index.css';
import { Router, Route, IndexRoute, Link } from 'react-router'
import createHistory from 'history/createBrowserHistory'
const browserHistory = createHistory()
export default class Hello extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div />
    );
  }
}
const route = (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={App}/>
      <Route path="/newEvent" component={NewEvent}/>
    </div>
  </Router>
)
ReactDOM.render(
  route,
  document.getElementById('root')
);
