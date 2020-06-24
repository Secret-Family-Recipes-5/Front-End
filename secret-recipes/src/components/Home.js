import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import RootContext from '../contexts/RootContext';

const Home = () => {
  const { recipes } = useContext(RootContext);
  return (

    <div className='recipeCardContainer'>
      {recipes.map(recipe => <RecipeCard key={recipe.recipeid} recipe={recipe} />)}
    </div>
  );
}

export default Home