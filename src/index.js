import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/timeline.css';
import './css/login.css'
import App from './App';
import Login from './componentes/Login';
import {Router,Route} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
const newHistory = createBrowserHistory();

ReactDOM.render(
  (
    <Router history={newHistory} >
      <div>
              <Route path="/" component={Login}/>
              <Route path="/timeline" component={App} />
     </div>
    </Router>
  ), 
  document.getElementById('root')
);
