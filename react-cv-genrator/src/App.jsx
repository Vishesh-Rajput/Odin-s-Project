import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Preview from './components/Preview';
import { Typography,Button } from '@mui/material';

function App() {

    const [formData ,setFormData] = useState({name:''});
    const [backColor , setBackColor] = useState("red");

    function setcolor(){
      setBackColor('green');
    }
var col = "blue";
  return (
    <>
    <Form/>
    <Typography variant='h2' sx={{color : "blue", fontSize:"50px", fontWeight:" 700" }}>

Vishesh is great web devloper
    </Typography>
    
<Button variant='contained' href='https://google.com'>smash</Button>
<Button variant='text' sx={{backgroundColor: backColor}} onClick={setcolor}>smash </Button>
<Button variant='outlined' sx={{color: "red" , backgroundColor: " blue" , pl:"4", m:'40px'
  
}}>smash</Button>
    </>
  )
}

export default App
