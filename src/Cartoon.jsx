import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';

const Cartoon = () =>{

    const [num,setNum]=useState();
    
    const onSubmit =(event) =>{

        setNum(event.target.value);
        useEffect = () =>{
            alert("hiii");
        };
        //    async function getData()
        //     {
        //         const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/{$num}`)
        //         console.log(res);
        //     }

        //     getData();
       
       
    }
    return (
        <>
            <h1 style={{marginLeft:50}}> you choose {num} value</h1>
            <select style={{marginLeft:50}} onChange={onSubmit}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>
    );
}

export default Cartoon;