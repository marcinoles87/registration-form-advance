
import React, {useEffect, useState} from 'react'


import '../components/form.css'



 function Form() {

  const [name,setName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');

  const fullName = `${name} ${lastName} ${email}` ;


  const [submitted,setSubmitted] = useState(false);
  const [valid,setValid] = useState(false);

  const handleSubmitted = (e) =>{
    e.preventDefault()

    if(name && lastName && email){
    setValid(true)
  }

   setSubmitted(true)
   setLastName('')
    
  }
  

  return (
    <div className='form-container'>
        
        <form className='form-registration' onSubmit={handleSubmitted}>

            {submitted && valid? <div className='succes-message'>Succes ! your message was send</div> : null}

            {/* <h1>Form Registration</h1> */}

            <input 
            onChange={e => (setName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your name'>
            </input>
            <p>{name.length >=5 ? '' : 'nazwa za krotka ...'}</p>

            <input 
            onChange={e => (setLastName(e.target.value))}
            className='input-form'
            type='text'
            placeholder=' your last name'>
            </input>
            <p>{lastName.length >=3 ? '' : 'nazwa za krotka ...'}</p>

            <input 
            onChange={e => (setEmail(e.target.value))}
            className='input-form'
            type='email'
            placeholder=' your email'>
            </input>
            <p>{email.length >=2 ? '' : 'nazwa za krotka ...'}</p>

            <button className='form-button'>Submit</button>

        </form>

      <div className='fullinfo'>
        <h1>User information</h1>
        {fullName}
        {/* <h3>{name} {lastName} {email}</h3> */}
      </div>


    </div>
  )
}

export default Form
