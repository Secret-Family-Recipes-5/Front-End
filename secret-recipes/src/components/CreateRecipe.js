import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
  "title": "",
  "source": "",
  "ingredients": "",
  "instructions": "",
  "category": ""
}

const CreateRecipe = () => {

  let history = useHistory();
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
      .post('/recipes/recipe/', formValues)
      .then(res => {
        console.log(res)
        history.push('/home')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='createRecipeContainer'>
      <h2 className='createRecipeTitle'>&mdash; Create Recipe</h2>

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

        <label htmlFor='source'>Source</label>
        <input
          name='source'
          id='source'
          type='text'
          placeholder='Aunt Patty'
          onChange={inputHandler}
        />

        <label htmlFor='ingredients'>Ingredients</label>
        <input
          name='ingredients'
          id='ingredients'
          type='text'
          placeholder='Ingredients'
          onChange={inputHandler}
        />

        <label htmlFor='instructions'>Instructions</label>
        <input
          name='instructions'
          id='instructions'
          type='text'
          placeholder='Instructions'
          onChange={inputHandler}
        />

        <label htmlFor='category'>Category</label>
        <input
          name='category'
          id='category'
          type='text'
          placeholder='Category'
          onChange={inputHandler}
        />

        <button className=''>Create Recipe</button>

      </form>
    </div>
  );
}

export default CreateRecipe