import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className='recipeCard'>
        <Link to={`/recipe/${recipe.id}`}>
          <h2 className='recipeTitle'>{recipe.title}</h2>
        </Link>
        <p className='recipeSource'>{recipe.source}</p>
        <a className='recipeCategory'>#{recipe.category}</a>
      </div>
    </>
  );
}

export default RecipeCard