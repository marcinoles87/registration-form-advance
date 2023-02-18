
import React from 'react'



 function Form() {
  return (
    <div className='form-container'>
        
        <form className='form-registration'>
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

        </form>


    </div>
  )
}

export default Form
