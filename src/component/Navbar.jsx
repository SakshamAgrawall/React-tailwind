import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';


const Navbar = () => {
  const [nav,setNav] = useState(true)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='text-white flex items-center h-24 max-w-[1240px] mx-auto px-4 justify-between'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>HOME</li>
        <li className='p-4'>COMPANY</li>
        <li className='p-4'>RESEARCH</li>
        <li className='p-4'>ABOUT</li>
        <li className='p-4'>CONTACT</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        
        </div>
        <div className={!nav?'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl m-4 font-bold text-[#00df9a]'>REACT</h1>
        <ul className='p-4 uppercase'>
        <li className='p-4 border-b border-gray-600'>HOME</li>
        <li className='p-4 border-b border-gray-600'>COMPANY</li>
        <li className='p-4 border-b border-gray-600'>RESEARCH</li>
        <li className='p-4 border-b border-gray-600'>ABOUT</li>
        <li className='p-4 border-b border-gray-600'>CONTACT</li>
      </ul>
        </div>
    </div>
  )
}

export default Navbar
