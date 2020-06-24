import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'
import RootContext from '../contexts/RootContext';

const Nav = () => {

  const { loginStatus, setLoginStatus, setSearchValues } = useContext(RootContext);

  // Search
  const inputValueHandler = (event) => {
    setSearchValues(event.target.value);
  }


  useEffect(() => {
    localStorage.getItem('token') ? setLoginStatus(true) : setLoginStatus(false)
  }, [setLoginStatus])

  const logoutHandler = () => {
    localStorage.removeItem('token')
    setLoginStatus(false)
  }

  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='logo'>
          <Link to='/home'>Secret Family Recipes Cookbook</Link>
          {loginStatus ? <input type='text' placeholder='Search recipes...' onChange={inputValueHandler}></input> : null}
        </div>
        <nav>

          {loginStatus ?
            <>
              <Link to='/home'>Home</Link>
              <Link to='/' onClick={logoutHandler}>Logout</Link>
              <Link className='createRecipe' to='/create'>New Recipe</Link>
            </>
            :
            <>
              <Link to='/'>Login</Link> <Link to='/register'>Register</Link>
            </>
          }
        </nav>
      </div>

      {loginStatus ?
        <div className='categoryWrapper'>
          <Category />
        </div>
        :
        null
      }

    </div>
  );
}

export default Nav