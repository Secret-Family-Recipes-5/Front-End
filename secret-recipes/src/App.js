import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import '../src/css/index.css';
import RootContext from './contexts/RootContext';
import PrivateRoute from './components/PrivateRoute';
import data from './dummydata';
import Recipe from './components/Recipe';

function App() {
  let [recipes] = useState(data);

  const addDummy = recipe => {
    recipes.push(recipe)
  }

  return (
    <div className="App">
      <RootContext.Provider value={{recipes, addDummy}}>
        <Nav />
        <Switch>

          <PrivateRoute exact path='/home' component={Home} />

          <PrivateRoute exact path='/create' component={CreateRecipe} />

          <PrivateRoute exact path='/recipe/:id' component={Recipe} />

          <Route exact path='/register' component={Register} />

          <Route exact path='/' component={Login} />

        </Switch>
      </RootContext.Provider>
    </div>
  );
}

export default App;
