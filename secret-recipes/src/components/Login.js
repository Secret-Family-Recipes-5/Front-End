import React, { useState } from 'react'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();

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
  //   axiosWithAuth()
  //   .put('/api/login', formValues)
  //   .then(res => {
  //     console.log(res)
  //     // window.localStorage.setItem('token', res.data.payload)
  //     // history.push('/home')
  //   })
  //   .catch(err => console.log(err))
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h2 className='formTitle'>Login</h2>
        <p className='formDesc'>The perfect solution to your lost family cookbook</p>

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
    </div>
  );
}

export default Login