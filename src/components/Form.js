
import React from 'react'

import '../components/form.css'



 function Form() {
  return (
    <div className='form-container'>
        
        <form className='form-registration'>
            <h1>Form Registration</h1>
            <input 
            className='input-form'
            type='text'
            placeholder='your name'>
            </input>

            <input 
            className='input-form'
            type='text'
            placeholder='your last name'>
            </input>

            <input 
            className='input-form'
            type='email'
            placeholder='your email'>
            </input>

            <button className='form-button'>Submit</button>

        </form>


    </div>
  )
}

export default Form
