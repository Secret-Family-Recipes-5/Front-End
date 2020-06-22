import React from 'react'

const RecipeCard = () => {
  return (
    <>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Banana Bread</h2>
        <p className='recipeSource'>Grandma Patty</p>
        <a className='recipeCategory'>Bread</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Southern-Style Egg Salad</h2>
        <p className='recipeSource'>Sam Dors</p>
        <a className='recipeCategory'>Salad</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Egg Muffin</h2>
        <p className='recipeSource'>Aunt Patty</p>
        <a className='recipeCategory'>Eggs</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>French Onion-Breaded Baked Chicken</h2>
        <p className='recipeSource'>Grandma Patty</p>
        <a className='recipeCategory'>Chicken</a>
      </div>
    </>
  );
}

export default RecipeCard