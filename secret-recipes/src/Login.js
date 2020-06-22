import React, { useState } from 'react'

const Login = () => {

  const initialFormValues = {
    username: '',
    password: '',
  }

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInput = (event) => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Axios PUT
  }

  return (
    <div className='formContainer'>
      <form onSubmit={handleSubmit} >

        <input
          type='text'
          name='username'
          placeholder='Username'
          value={formValues.username}
          onChange={handleInput}
        />

        <input
          type='password'
          name='password'
          placeholder='Password'
          value={formValues.password}
          onChange={handleInput}
        />

        <button>Login</button>
      </form>
    </div>
  );
}

export default Login