import React from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import TodoList from './TodoList';

export default function Main() {
  const  navigate = useNavigate();
  const Taketo = () => {
    navigate(`/TodoList`);
  }
  return (
    <div className='flex font-medium items-center justify-center h-96 flex-col'>
      <div className='grid grid-cols-2 gap-2 p-6 rounded-md shadow-sm bg-slate-100 w-96'>
            <img src="https://c0.wallpaperflare.com/preview/740/290/352/active-activity-adult-road.jpg" className='w-64 '/>
            <span >Subtracting from your list of priorities is as important as adding to it.</span>
      </div>
      <div className=' translate-y-10'>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={Taketo}>Let's Begin</button>
      </div>
    </div>
  )
}
