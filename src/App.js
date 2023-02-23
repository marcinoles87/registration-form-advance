import React,{useState} from 'react';
import './App.css';
import Form from './components/Form'

function App() {



  const [on,setOn] = useState(false);

  const handleOn = () =>{
    
}

  return (
    <div className="App">

      <div className='slider'><input className='slide' type={'button'} onClick={handleOn}></input></div>
      
      <Form></Form>
      
    </div>
  );
}

export default App;
