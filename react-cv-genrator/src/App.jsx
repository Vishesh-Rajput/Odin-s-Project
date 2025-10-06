import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Preview from './components/Preview';

function App() {

    const [formData ,setFormData] = useState({name:''});

  return (
    <>
   <h1>CV genrator</h1>
    <Form formData = {formData} setFormData = {setFormData}/>
    <Preview/>
    </>
  )
}

export default App
