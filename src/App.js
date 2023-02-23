import React,{useState} from 'react';
import './App.css';
import Form from './components/Form'

function App() {

  const check = document.getElementsByClassName('slide')
  const bd = document.querySelector('body')

  console.log(bd)

  const handleOn = () =>{
   
    if(check){
    bd.classList.toggle('dark')
    }
    
}

  return (
    <div className="App">

      <div className='slider'><input className='slide' type={'button'} onClick={handleOn}></input></div>
      
      <Form></Form>
      
    </div>
  );
}

export default App;
