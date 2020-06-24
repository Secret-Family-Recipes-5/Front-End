import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import CreateRecipe from './components/CreateRecipe';
import '../src/css/index.css';
import RootContext from './contexts/RootContext';
import PrivateRoute from './components/PrivateRoute';
import Recipe from './components/Recipe';
import UpdateRecipe from './components/UpdateRecipe';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loginStatus, setLoginStatus] = useState(false)
  const [itemToEdit, setItemToEdit] = useState({})

  useEffect(() => {
    axios
    .get(`https://secret-recipe-5.herokuapp.com/recipes/recipes`)
    .then(res => {
      setRecipes(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="App">
      <RootContext.Provider value={{recipes, loginStatus, setLoginStatus, itemToEdit, setItemToEdit}}>
        <Nav />
        <Switch>

          <PrivateRoute exact path='/home' component={Home} />

          <PrivateRoute exact path='/create' component={CreateRecipe} />

          <PrivateRoute exact path='/update' component={UpdateRecipe} />

          <PrivateRoute exact path='/recipe/:id' component={Recipe} />

          <Route exact path='/register' component={Register} />

          <Route exact path='/' component={Login} />

        </Switch>
      </RootContext.Provider>
    </div>
  );
}

export default App;
