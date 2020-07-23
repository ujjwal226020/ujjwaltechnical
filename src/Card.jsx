import React from 'react';


const Card =(props) =>{

    
    return <>
       
                <div className="card" style={{marginTop:50}} >
                    <img className="card-img-top" src={props.img} style={{height:300}} alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">{props.name}</h4>
                        <p className="card-text">{props.text}</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                    
                </div> 
        
    </>
}

export default Card;
