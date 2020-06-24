import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ recipe }) => {
  return (
    <>
      <div className='recipeCard'>
        <Link className='recipeTitle' to={`/recipe/${recipe.id}`}>
          {recipe.title}
        </Link>
        <p className='recipeSource'>{recipe.source}</p>
        <a className='recipeCategory'>#{recipe.category}</a>
      </div>
    </>
  );
}

export default RecipeCard