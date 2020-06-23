import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import '../src/css/index.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>

        {/* <PrivateRoute exact path='/home' component={Home} /> */}

        <Route exact path='/create' component={CreateRecipe} />

        <Route exact path='/home' component={Home} />

        <Route exact path='/register' component={Register} />

        <Route exact path='/' component={Login} />

      </Switch>
    </div>
  );
}

export default App;
