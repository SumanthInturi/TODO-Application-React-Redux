import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from './Nav';


const Profile = () =>  {
	const [userData, setUserData] = useState('');

	const fetchData = () => {
	fetch(`http://localhost:3006/Profiles`)
			.then(res => res.json())
			.then(resData => setUserData(resData[0] ) );
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
                    <div className="container flex justify-center py-20"  >
                    <div class="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100 relative">
                        <img src="https://git.techigai.io/uploads/-/system/user/avatar/252/avatar.png" class="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"/>
                        <span class="top-5 right-24 absolute  w-10 h-10 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full" ></span>
	
	<div class="space-y-4 text-center divide-y divide-gray-700">
		<div class="my-2 space-y-1">
			<h2 class="text-xl font-semibold sm:text-2xl">{userData.firstName} {userData.middleName} {userData.lastName}</h2>
			<p class="px-5 text-xs sm:text-base dark:text-gray-400">{userData.email}</p>
            <p class="px-5 text-xs sm:text-base dark:text-gray-400">Number : {userData.contactNumber}</p>
            <p class="px-5 text-xs sm:text-base dark:text-gray-400">AGE : {userData.Age}</p>
            <p class="px-5 text-xs sm:text-base dark:text-gray-400">Location : {userData.location}</p>
		</div>
		
	</div>
</div>

                <NavLink to='/ProfileEdit'><span class=" inline-flex absolute items-center justify-center p-3 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mx-10 -my-10">EDIT</span></NavLink>
            </div>
				<Outlet/>
            
		</>
	);
};

export default Profile;