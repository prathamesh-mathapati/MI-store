import React from 'react'
import HotItem from './HotItem'
const HotAccessorise = ({music,musicCouer}) => {
  return (
    <div className='hotaccessorise'>
    <div><img alt='Cover' src={musicCouer}/></div>


      <div>
        {music?.map((item,index)=>(
            <HotItem key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>
        ))}
      </div>
    </div>
  )
}

export default HotAccessorise
