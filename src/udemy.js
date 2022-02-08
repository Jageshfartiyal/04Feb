import React from "react";
function Blocks(props) {
    return (
      <div className='comma'>
        <img className="image" src={props.image} alt='image not found'/>
        <div className="para">
         
          
          <div className="des"><a href={props.link} target="_blank"><b>{props.description}</b></a></div>
          <div className="author"><b />{props.author}</div>
          <div className="price">{props.price}<del className="deleted">{props.deleted}</del></div>
          <div className="seller">{props.seller}</div>
          
        
          
        </div>
      </div>
  
    );
  }

  export default Blocks