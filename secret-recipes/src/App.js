import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Login from './Login'
import './App.css';

function App() {
  return (
    <div className="App">

      <Login />


      <Switch>

        <Route path='/profile'>

        </Route>
        <Route path='/register'>

        </Route>
        <Route path='/'>

        </Route>

      </Switch>
    </div>
  );
}

export default App;
