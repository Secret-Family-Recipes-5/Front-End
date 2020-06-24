import React, { useState, useContext } from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import RootContext from '../contexts/RootContext';

const UpdateRecipe = () => {
    let history = useHistory();
    const { itemToEdit } = useContext(RootContext);
    
    let initialFormValues = {
        "title": itemToEdit.title,
        "source": itemToEdit.source,
        "ingredients": itemToEdit.ingredients,
        "instructions": itemToEdit.instructions,
        "category": itemToEdit.category
    }

    const [formValues, setFormValues] = useState(initialFormValues);

    const inputHandler = event => {
        const { name, value } = event.target

        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const submitHandler = event => {
        event.preventDefault()
        axios
            .put(`https://secret-recipe-5.herokuapp.com/recipes/recipe/${itemToEdit.recipeid}`, formValues)
            .then(res => {
                history.push(`/recipe/${itemToEdit.recipeid}`)
            })
            .catch(err => console.log(err))
    }

    if (formValues.title === undefined) {
        return <Redirect to='/home'/>
    } else {
        return (
            <div className='createRecipeContainer'>
                <h2 className='createRecipeTitle'>&mdash; Update a Recipe</h2>

                <hr />

                <form onSubmit={submitHandler}>
                    <label htmlFor='title'>Name of Recipe</label>
                    <input
                        name='title'
                        id='title'
                        type='text'
                        value={formValues.title}
                        onChange={inputHandler}
                    />

                    <label htmlFor='source'>Source</label>
                    <input
                        name='source'
                        id='source'
                        type='text'
                        value={formValues.source}
                        onChange={inputHandler}
                    />

                    <label htmlFor='ingredients'>Ingredients</label>
                    <input
                        name='ingredients'
                        id='ingredients'
                        type='text'
                        value={formValues.ingredients}
                        onChange={inputHandler}
                    />

                    <label htmlFor='instructions'>Instructions</label>
                    <input
                        name='instructions'
                        id='instructions'
                        type='text'
                        value={formValues.instructions}
                        onChange={inputHandler}
                    />

                    <label htmlFor='category'>Category</label>
                    <input
                        name='category'
                        id='category'
                        type='text'
                        value={formValues.category}
                        onChange={inputHandler}
                    />

                    <button className=''>Update Recipe</button>

                </form>
            </div>
        );
    }
}

export default UpdateRecipe