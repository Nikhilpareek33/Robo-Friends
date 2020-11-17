import React from 'react';

const Card =({id,name,email})=>{
    
    return(
        <div className=' tc bg-light-green dib pa3 ma2 br3 shadow-5 grow'>
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
       
    )
}

export default Card;