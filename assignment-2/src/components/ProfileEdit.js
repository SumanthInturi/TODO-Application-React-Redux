import React, { useEffect, useState } from 'react'
import '../styling/main.css'

export default function ProfileEdit() {
  const [details,setDetails] = useState([]);
  const [newdetails,setNewdetails] = useState(
    {
      firstName : details.firstName,
      middleName : details.middleName,
      lastName : details.lastName,
      email : details.email,
      location : details.location,
      Age : details.Age,
      contactNumber : details.contactNumber
    }
  );
  const  FetchUserDetails = () => {
       fetch('http://localhost:3006/Profiles').then(e => e.json())
       .then( res => setDetails(res[0]))
  }
  useEffect(()=>{
     FetchUserDetails();
  },[])
  const Edited = () => {
    
    fetch('http://localhost:3006/Profiles/1', {
  method: 'PUT', 
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
  // newdetails.firstName = "sumanth";
  console.log(newdetails.firstName)
       
  }
  return (
    <>
    <div class="p-6 dark:bg-gray-800 dark:text-gray-50 w-1/2 mx-64 ">
    <div class="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-slate-400">
			<div class="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div class="col-span-full sm:col-span-3">
					<label for="firstname" class="text-sm">First name</label>
					<input id="firstname" type="text" placeholder="First name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.firstName} onChange={event => newdetails.firstName = event.target.value}/>
				</div>
        <div class="col-span-full sm:col-span-3">
					<label for="lastname" class="text-sm">Middle name</label>
					<input id="lastname" type="text" placeholder="Last name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.middleName} onChange={event => newdetails.middleName = event.target.value}/>
				</div>
				<div class="col-span-full sm:col-span-3">
					<label for="lastname" class="text-sm">Last name</label>
					<input id="lastname" type="text" placeholder="Last name" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.lastName} onChange={event => newdetails.lastName = event.target.value}/>
				</div>
				<div class="col-span-full sm:col-span-3">
					<label for="email" class="text-sm">Email</label>
					<input id="email" type="email" placeholder="Email" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.email} onChange={event => newdetails.email = event.target.value}/>
				</div>
				<div class="col-span-full">
					<label for="address" class="text-sm">Address</label>
					<input id="address" type="text" placeholder="Loaction" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.location} onChange={event => newdetails.location = event.target.value}/>
				</div>
				<div class="col-span-full sm:col-span-2">
					<label for="city" class="text-sm">AGE</label>
					<input id="city" type="text" placeholder="AGE" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.Age} onChange={event => newdetails.Age = event.target.value}/>
				</div>
				<div class="col-span-full sm:col-span-2">
					<label for="state" class="text-sm">Phone Number</label>
					<input id="state" type="text" placeholder="Number" class="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" defaultValue={details.contactNumber} onChange={event => newdetails.contactNumber = event.target.value}/>
				</div>
				<div class="col-span-full">
          <button class=" inline-flex absolute items-center justify-center p-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 my-10" onClick={Edited}>Save Changes</button>
        </div>
			</div>
		</div>
    </div>
    </>
  )
}
