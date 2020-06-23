import React from 'react'


const RecipeCard = () => {
  return (
    <>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Banana Bread</h2>
        <p className='recipeSource'>Grandma Patty</p>
        <a className='recipeCategory'>#bread</a>
        <a className='recipeCategory'>#breakfast</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Southern-Style Egg Salad</h2>
        <p className='recipeSource'>Sam Dors</p>
        <a className='recipeCategory'>#salad</a>
        <a className='recipeCategory'>#eggs</a>
        <a className='recipeCategory'>#southern</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>Egg Muffin</h2>
        <p className='recipeSource'>Aunt Patty</p>
        <a className='recipeCategory'>#eggs</a>
        <a className='recipeCategory'>#bread</a>
        <a className='recipeCategory'>#breakfast</a>
      </div>
      <div className='recipeCard'>
        <h2 className='recipeTitle'>French Onion-Breaded Baked Chicken</h2>
        <p className='recipeSource'>Grandma Patty</p>
        <a className='recipeCategory'>#chicken</a>
        <a className='recipeCategory'>#onion</a>
        <a className='recipeCategory'>#french</a>
        <a className='recipeCategory'>#breakfast</a>
      </div>
    </>
  );
}

export default RecipeCard