import React from 'react'

const CreateRecipe = () => {

  return (
    <div className='createRecipeContainer'>
      <h2 className='createRecipeTitle'>&mdash; Create Recipe</h2>

      <hr />

      <form>
        <label htmlFor='title'>Name of Recipe</label>
        <input
          name='title'
          id='title'
          type='text'
          placeholder='Banana Bread'
        />

        <label htmlFor='source'>Source</label>
        <input
          name='source'
          id='source'
          type='text'
          placeholder='Aunt Patty'
        />

        <button>Create Recipe</button>

      </form>
    </div>
  );
}

export default CreateRecipe