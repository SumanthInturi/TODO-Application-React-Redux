import React, { useEffect, useState } from 'react'
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom'
import '../styling/main.css'
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, invokeStore } from '../reducer/reducer';


export default function TodoList() {
  const navigate = useNavigate();
  const [tododata,setTododata] = useState([])
  const TodoList = () => {
    fetch(`http://localhost:3006/Todo`)
			.then(res => res.json())
			.then(resData => setTododata(resData));
  }
  useEffect(() => {
    TodoList();
  },[])
  let data = tododata.map((item) => {
    let color = item.status ? "bg-red-500" : "bg-green-500";
    return (
      <tr class="border-b border-gray-200 dark:border-gray-700 " key={item.id} onClick={() => navigate(`/Todo/${item.id}`) }>
        <td class="px-6 py-4 text-2xl">{item.title}</td>
        {/* <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.discription}</td> */}
        {console.log(color)}
        <td class={"px-6 py-4 "  + (item.status ? 'bg-green-500' : 'bg-red-500')}>{item.status ? <h2>Completed</h2> : <h4>Not Completed</h4>}</td>
      </tr>
    )
  })
  const data1= useLoaderData();
  const dispatch = useDispatch();
  dispatch(invokeStore(data1));
  const [title,setTitle] = useState('');
  const [discription,setDiscription] = useState('');
  const handler = async() =>{
   await  dispatch(addTodo({title:title,discription:discription}));
    navigate(`/TodoList`)
    window.location.reload();
  }
  return (
    <>
    <div className=' flex justify-center '>
        <div class="grid grid-cols-1 gap-6 mb-6 py-5">
              <input type="text" placeholder='Enter title'  value={title} onChange={(event) => setTitle(event.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <input type="text" placeholder='enter discription' value={discription} onChange={(event) => {
                setDiscription(d => event.target.value)
              }} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              <button onClick={handler} type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Todo</button>

        </div>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center my-10">
      <table class="  text-sm text-left text-gray-500 dark:text-gray-400 w-2/3">
      <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
    <tr>
      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xl">Title</th>
      {/* <th scope="col" class="px-6 py-3 text-xl">Discription</th> */}
      <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800 text-xl">Status</th>
    </tr>
  </thead>
           <tbody>
               {data}
           </tbody>
      </table>
      <Outlet />
    </div>
  </>
  )
}
