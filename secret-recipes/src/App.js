import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import '../src/css/index.css';
import RootContext from './contexts/RootContext';

function App() {
  return (
    <div className="App">
      <RootContext.Provider>
        <Nav />
        <Switch>

          {/* <PrivateRoute exact path='/home' component={Home} /> */}

          <Route exact path='/home' component={Home} />

          <Route exact path='/register' component={Register} />

          <Route exact path='/' component={Login} />

        </Switch>
      </RootContext.Provider>
    </div>
  );
}

export default App;
