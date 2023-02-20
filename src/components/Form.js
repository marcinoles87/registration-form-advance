
import React, {useEffect, useState} from 'react'


import '../components/form.css'



 function Form() {

  let [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');

  const fullName = `${name} ${lastName} ${email}` ;
  

  return (
    <div className='form-container'>
        
        <form className='form-registration'>
            <h1>Form Registration</h1>

            <input 
            onChange={e => (setName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your name'>
              
            </input><p>{name.length >=5 ? '' : 'nazwa za krotka ...'}</p>

            <input 
            onChange={e => (setLastName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your last name'>
            </input><p>{lastName.length >=3 ? '' : 'nazwa za krotka ...'}</p>

            <input 
            onChange={e => (setEmail(e.target.value))}
            className='input-form'
            type='email'
            placeholder=' your email'>
            </input><p>{email.length >=2 ? '' : 'nazwa za krotka ...'}</p>

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
