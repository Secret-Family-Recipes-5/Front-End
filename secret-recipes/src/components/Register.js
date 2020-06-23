import React, { useState } from 'react'
import formValidation from './formValidation'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Register = () => {
    let history = useHistory();

    const initialFormValues = {
      username: '',
      password: '',
      primaryemail: 'testing@testing.com'
    }

    const initialFormErrors = {
      username: '',
      password: '',
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

      axios
      .create({
        headers: {
          Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
          'Content-Type': 'application/x-www-form-urlencoded'
         }
      })
      .post('https://secret-recipe-5.herokuapp.com/users/createnewuser', formValues)
      .then(res => {
        console.log(res)
        history.push('/')
      })
      .catch(err => console.log(err))
    }

    return (
      <div className='formContainer'>
        <div className='formWrapper'>
          <h2 className='formTitle'>Register</h2>
          <p className='formDesc'>The perfect solution to your lost family cookbook</p>

          <hr />

          <form onSubmit={handleSubmit} >

            <label htmlFor='username'>Username</label>
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

            <label htmlFor='password'>Password</label>
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

            <button>Sign up</button>
          </form>
        </div>
      </div>
    );
}

export default Register