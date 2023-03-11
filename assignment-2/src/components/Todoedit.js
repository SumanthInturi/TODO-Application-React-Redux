import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Todoedit() {
   
    const [details,setDetails] = useState({});
    const {id} = useParams();
    console.log(details);
    const [newdetails,setNewdetails] = useState(
        {
          title : details.title,
          status : details.status,
          discription : details.discription
        }
      );
    
    const Check = () => {
        fetch(`http://localhost:3006/Todo/${id}`)
         .then(ress => ress.json()).then( res => setDetails(res))
    }
    useEffect ( () => {
        Check();
   },[])
    console.log(details);
    const Check2 = () => {
    
        fetch(`http://localhost:3006/Todo/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newdetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      console.log(newdetails.firstName)
           
      }
  return (
    <div>
        <div className=' flex justify-center '>
            <div class="grid grid-cols-1 gap-6 mb-6 py-40 h-screen">
            <div  class="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-max p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 space-y-10 h-96 p-20" onChange={event => newdetails.title = event.target.value}>
            <div className='space-x-10'>Title : 
                <label for="title" />
                <input id='title' class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-10 px-3 -translate-x-10" defaultValue={details.title} onChange={event => newdetails.title = event.target.value}/>
            </div>
            <div>Discription : 
            <label for="discription" />
                <input id='discription' class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 h-10 px-3" defaultValue={details.discription} onChange={event => newdetails.discription = event.target.value}/>
            </div>
            <button onClick={Check2} className="bg-slate-400 w-20 h-10">click </button>
            </div>

            </div>
        </div>
    </div>
  )
}
