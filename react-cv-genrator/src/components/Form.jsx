import { useState } from "react";
import { TextField , Button } from "@mui/material";



function Form(){

    const [inputs , setInputs] = useState({
        name:'',
        email:"",
        college:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs((prevInputs) => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(inputs);
        
        
    }
    return(
    <>
    {/* <input type="text" value={FormData.name} /> */}
    < form onSubmit={handleSubmit}>
<TextField autoComplete="on" name='name' type="text"   helperText="Please enter your name" value={inputs.name} onChange={handleChange}></TextField>
<TextField autoComplete="on" name="email" type="email"  sx={{m:" 0 100px "}} placeholder="Enter email" value={inputs.email} onChange={handleChange}></TextField>
<TextField autoComplete="on" name="college" type="text" placeholder="Enter college" value={inputs.college} onChange={handleChange}></TextField>
    <Button type="submit" variant="contained" >submit</Button>
    </form >
    </>


    );
} 

export default Form ;