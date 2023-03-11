import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import '../styling/main.css'
import { deleteTodo,doneTodo,invokeStore,notdoneTodo } from '../reducer/reducer';

export default function Todo() {
    const {id} = useParams();
    const [details,setDetails] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state =useSelector(state => state)

    const getTodoIndexById = (arr,id) =>{
      let i=arr.length;
      while(i--){
          if(arr[i]&& arr[i].id == id)
          return i;
      }
      return -1;
  }

  const arrId = getTodoIndexById(state.todo.todo,id);

    const handler = () => {
       dispatch(deleteTodo(id));
      navigate(`/TodoList`);
    }
    const handlerDone = () => {
      dispatch(doneTodo(id));
    }
    const handlerNotDone = () => {
      dispatch(notdoneTodo(id));
    }
    const Goto = () => {
      console.log("hello")
      navigate(`/Todoedit/${id}`);
    }
  return (
    <div className=' flex justify-center '>
    <div class="grid grid-cols-1 gap-6 mb-6 py-40 h-screen">
      <h1>
        <div  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-1/2 space-y-10">
        <div className='space-x-10'>Title : {state.todo.todo[arrId].title}</div>
        <div>Discription : {state.todo.todo[arrId].discription}</div>
        <div> status : {state.todo.todo[arrId].status? <span>Completed</span> : <span> Incomplete</span>}</div>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  my-10" onClick={handler}>Delete</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10" onClick={handlerDone}>Done</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  my-10" onClick={handlerNotDone}>incomplete</button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-10" onClick={Goto}>Edit</button>
      </h1>
      </div>
    </div>
  )
}
