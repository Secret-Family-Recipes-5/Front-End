import React, { useState } from 'react'

const Login = () => {

  return (
    <div className='formContainer'>
      <form>
        <input
          type='text'
          name='username'
          placeholder='Username'
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
        />
      </form>
    </div>
  );
}

export default Login