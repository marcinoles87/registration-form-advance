
import React, {useState} from 'react'


import '../components/form.css'



 function Form() {

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');

  const fullName = `${name} ${lastName} ${email}` 

  return (
    <div className='form-container'>
        
        <form className='form-registration'>
            <h1>Form Registration</h1>

            <input 
            onChange={e => (setName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your name'>
            </input>

            <input 
            onChange={e => (setLastName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your last name'>
            </input>

            <input 
            onChange={e => (setEmail(e.target.value))}
            className='input-form'
            type='email'
            placeholder=' your email'>
            </input>

            <button className='form-button'>Submit</button>

        </form>

      <div className='fullinfo'>
        <h1>Full Information</h1>
        <h2>{fullName}</h2>
        <h3>{name} {lastName} {email}</h3>
      </div>


    </div>
  )
}

export default Form
