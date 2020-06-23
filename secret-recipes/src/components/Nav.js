import React from 'react'
import { Link } from 'react-router-dom'
import Category from './Category'

const Nav = () => {

  return (
    <div className='navContainer'>
      <div className='navWrapper'>
        <div className='logo'>
          <Link to='/'>Secret Family Recipes Cookbook</Link>
          <input type='text' placeholder='Search recipes...'></input>
        </div>
        <nav>
          <Link to='/Home'>Home</Link>
          <Link className='createRecipe' to='/create'>New Recipe</Link>
        </nav>
      </div>


      <div className='categoryWrapper'>
        <Category />
      </div>

    </div>
  );
}

export default Nav