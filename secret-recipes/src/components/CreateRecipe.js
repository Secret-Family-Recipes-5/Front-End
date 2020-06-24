import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import * as Yup from 'yup';
import recipeFormValidation from './recipeFormValidation'

let initialFormValues = {
  "title": "",
  "source": "",
  "ingredients": "",
  "instructions": "",
  "category": ""
}

const initialFormErrors = {
  "title": "",
  "source": "",
  "ingredients": "",
  "instructions": "",
  "category": ""
}


const CreateRecipe = () => {
  let history = useHistory();

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputHandler = event => {
    const { name, value } = event.target

    Yup
      .reach(recipeFormValidation, name)
      .validate(value)


      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      })

      .catch(error => {
        setFormErrors({
          ...formErrors,
          [name]: error.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitHandler = event => {
    event.preventDefault()
    axios
      .post('https://secret-recipe-5.herokuapp.com/recipes/recipe/', formValues)
      .then(res => {
        console.log(res)
        history.push('/home')
        window.location.reload()
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='createRecipeContainer'>
      <h2 className='createRecipeTitle'>&mdash; Create a Recipe</h2>

      <hr />

      <form onSubmit={submitHandler}>
        <label htmlFor='title'>Name of Recipe</label>
        <input
          name='title'
          id='title'
          type='text'
          placeholder='Banana Bread'
          onChange={inputHandler}
        />
        <div className='formErrors'>
          <p>{formErrors.title}</p>
        </div>

        <label htmlFor='source'>Source</label>
        <input
          name='source'
          id='source'
          type='text'
          placeholder='Aunt Patty'
          onChange={inputHandler}
        />
        <div className='formErrors'>
          <p>{formErrors.source}</p>
        </div>

        <label htmlFor='ingredients'>Ingredients</label>
        <input
          name='ingredients'
          id='ingredients'
          type='text'
          placeholder='Ingredients'
          onChange={inputHandler}
        />
        <div className='formErrors'>
          <p>{formErrors.ingredients}</p>
        </div>

        <label htmlFor='instructions'>Instructions</label>
        <input
          name='instructions'
          id='instructions'
          type='text'
          placeholder='Instructions'
          onChange={inputHandler}
        />
        <div className='formErrors'>
          <p>{formErrors.instructions}</p>
        </div>

        <label htmlFor='category'>Category</label>
        <input
          name='category'
          id='category'
          type='text'
          placeholder='Category'
          onChange={inputHandler}
        />
        <div className='formErrors'>
          <p>{formErrors.category}</p>
        </div>

        <button className=''>Create Recipe</button>

      </form>
    </div>
  );
}

export default CreateRecipe