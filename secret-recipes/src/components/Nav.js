import React from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

const Nav = () => {
  const token = localStorage.getItem('token')

  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='logo'>
          <Link to='/'>Secret Family Recipes Cookbook</Link>
          <input type='text' placeholder='Search recipes...'></input>
        </div>
        <nav>
          <Link to='/Home'>All Recipes</Link>
          <Link className='createRecipe' to='/create'>New Recipe</Link>
        </nav>
      </div>

      {token ?
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