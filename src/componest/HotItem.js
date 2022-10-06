import React from 'react'
import './HotItem.css'
const HotItem = ({name,price,image,index}) => {
    console.log(name,'name');
  return (
    <div className='HotItem'>
    <img src={image} alt='bcsajs'/>
    <p>{name}</p>
    <span>{price}</span>
      
    </div>
  )
}

export default HotItem;
