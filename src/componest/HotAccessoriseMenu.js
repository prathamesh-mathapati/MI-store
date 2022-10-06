import React from 'react'
import { Link } from 'react-router-dom'
import './HotAccessorise.css'
const HotAccessoriseMenu = () => {
  return (
    <div className='hotaccessorisemanu'>
    <Link className='hotaccessoriselink' to='./music'>Music store</Link>
    <Link className='hotaccessoriselink' to='./smart'>Smart Device</Link>
    <Link className='hotaccessoriselink' to='./home'>Home</Link>
    <Link className='hotaccessoriselink' to='./lifestyle'>Lifestyle</Link>
    <Link className='hotaccessoriselink' to='./Mobile'>Mobile Accessorise</Link>

    </div>
  )
}

export default HotAccessoriseMenu



