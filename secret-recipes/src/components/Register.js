import React, { useState } from 'react'
// import { axiosWithAuth } from '../axiosWithAuth/axiosWithAuth';
// import { useHistory } from 'react-router-dom';

const Register = () => {
    // let history = useHistory();

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
    //   .put('/api/register', formValues)
    //   .then(res => {
    //     console.log(res)
    //     // window.localStorage.setItem('token', res.data.payload)
    //     // history.push('/')
    //   })
    //   .catch(err => console.log(err))
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
  
          <button>Register</button>
        </form>
      </div>
    );
}

export default Register