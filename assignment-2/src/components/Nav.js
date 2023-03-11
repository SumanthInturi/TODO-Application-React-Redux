import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
 
  return (
    <>
    
<nav className=' py-5 bg-purple-400 text-white'>
        <ul className='flex space-x-8 '>
           <li><i class="fa-regular fa-square-check -rotate-12 text-4xl mx-10" ></i></li>
             <NavLink to="/" ><li className='mx-20 py-2'>Home</li></NavLink>
             <NavLink to="/TodoList" ><li  className='mx-10 py-2'>TodoList</li></NavLink>
            <NavLink to="/Profile" ><li  className='mx-10 py-2 '>Profile</li></NavLink>
        </ul>
      
    </nav></>
  )
}
