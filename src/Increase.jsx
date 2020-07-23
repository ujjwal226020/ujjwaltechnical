import React from 'react';
import { useState } from 'react';

const Increase =() =>{

    const [num,numFunction]=useState(0);
    const Increament =() =>{
        numFunction(num+1);
    }

    const Decreament =() =>{
        if(num===0)
        {
            numFunction(0);
        }
        else{
            numFunction(num-1);
        }
        
    }
    return <>
            <h1>{num}</h1>
            <button onClick={Increament}>Increase</button>
            <button onClick={Decreament}>Decrease</button>
    </>
}

export default Increase;