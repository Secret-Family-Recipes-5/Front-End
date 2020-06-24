import React, { useContext } from 'react';
import RecipeCard from './RecipeCard';
import RootContext from '../contexts/RootContext';

const Home = () => {
  const { recipes, filteredArray, searchValues } = useContext(RootContext);

  return (

    <div className='recipeCardContainer'>
      {searchValues === ''
        ? recipes.map(recipe => <RecipeCard key={recipe.recipeid} recipe={recipe} />)
        : filteredArray.map(recipe => <RecipeCard key={recipe.recipeid} recipe={recipe} />)
      }
    </div>
  );
}

export default Home