import React from 'react';
import './index.css';
import { useState } from 'react';
const Forms = () =>{

    const [name,funName]=useState();
    const[fullName,setFulname]=useState();
    const inputValue = (event) =>{
        funName(event.target.value);
    }
    const onSubmit =() =>{
        setFulname(name);
    }
    return <>
        <h1 className='heading'>Hello,{fullName}</h1>
        <input  className='inputBox' type='text' placeholder='enter name' value={name} onChange={inputValue} /><br/><br/>
        <button onClick={onSubmit}>submit</button>
    </>
}

export default Forms;