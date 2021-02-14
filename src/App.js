import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Login from "./components/Login/Login";
import Register from './components/Register/Register'


import './App.css';

export default function App() {
  return (
      <Router>
         <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
              <Register/>
          </Route>
        </Switch>
      </Router>
  );
}
