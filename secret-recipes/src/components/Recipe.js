import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import RootContext from '../contexts/RootContext';
import { useHistory} from 'react-router-dom';
import axios from 'axios';

const Recipe = () => {
    let history = useHistory();
    const params = useParams();
    const { recipes, setItemToEdit } = useContext(RootContext);
    const recipe = recipes.find(recipe => recipe.recipeid == params.id);

    const deleteHandler = () => {
        axios
        .delete(`https://secret-recipe-5.herokuapp.com/recipes/recipe/${params.id}`)
        .then(res => {
            history.push('/home')
            window.location.reload()
        })
        .catch(err => console.log(err))
    }

    const updateHandler = () => {
        setItemToEdit(recipe)
        history.push('/update')
    }

    if(recipe === undefined) {
        return (
        <div className='recipeCard'>
            <h2 className='recipeTitle'>Recipe not found.</h2>
      </div>
        )
    } else {
        return (
            <div className='recipeContainer'>
                <h2 className='recipeTitle'>{recipe.title}</h2>
                <p className='recipeSource'>&mdash; {recipe.source}</p>
                <br/>
                <p className='recipeIngredients'>{recipe.ingredients}</p>
                <br/>
                <p className='recipeInstructions'>{recipe.instructions}</p>
                <button onClick={updateHandler} style={{background: 'green'}}>Update</button>
                <button onClick={deleteHandler}>Delete</button>
          </div>
        )
    }
}

export default Recipe