import React, { useState } from 'react'
import formValidation from './formValidation'
import * as Yup from 'yup'
import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  let history = useHistory();

  const initialFormValues = {
    "username": "",
    "password": "",
  }

  const initialFormErrors = {
    "username": "",
    "password": "",
  }

  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleInput = (event) => {
    const { name, value } = event.target

    Yup
      .reach(formValidation, name)
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

  const handleSubmit = (event) => {
    event.preventDefault()

    axiosWithAuth()
      .post('/login', `grant_type=password&username=${formValues.username}&password=${formValues.password}`,)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.access_token);
        history.push('/home')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <h2 className='formTitle'>&mdash; Login</h2>
        <p className='formDesc'>The perfect solution to your lost family cookbook</p>

        <hr />

        <form onSubmit={handleSubmit} >

          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            name='username'
            placeholder='johndoe'
            id='username'
            value={formValues.username}
            onChange={handleInput}
          />
          <div className='formErrors'>
            <p>{formErrors.username}</p>
          </div>

          <div className='formErrors'>
            <p>{formErrors.primaryemail}</p>
          </div>

          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='**********'
            id='password'
            value={formValues.password}
            onChange={handleInput}
          />
          <div className='formErrors'>
            <p>{formErrors.password}</p>
          </div>

          <button>Login</button>

        </form>
      </div>
    </div>
  );
}

export default Login