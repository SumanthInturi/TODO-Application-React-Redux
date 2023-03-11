import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { addTodo, invokeStore } from '../reducer/reducer';
import Nav from './Nav';



export default function Home() {
  
  const data1 = useLoaderData();
  const dispatch = useDispatch();
  dispatch(invokeStore(data1));
  const [title,setTitle] = useState('');
  const [discription,setDiscription] = useState('');
  const navigate = useNavigate();
  const handler = async() =>{
   await  dispatch(addTodo({title:title,discription:discription}));
    navigate(`/TodoList`)
    window.location.reload();
  }
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
  return (
    <><Nav/>
    <Outlet/>
    </>
  )
}
