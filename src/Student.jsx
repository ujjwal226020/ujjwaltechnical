import React from 'react';
import { useState } from 'react';
const Student =() =>{

    const data=new Date().toLocaleTimeString();
    const [datas,funName]=useState(data);
    
    const UpdateTime =() =>{
        const data=new Date().toLocaleTimeString();
        funName(data);
        
    }
   
    return(
        <>
            <div>
                <h1>{data}</h1>
                <button onClick={UpdateTime}>get Time</button>
                
            </div>
        </>
    );
}

export default Student;