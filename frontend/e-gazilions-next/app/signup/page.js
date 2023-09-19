"use client"
import Head from 'next/head';
import {useRouter} from 'next/navigation'

export default function Home() {
	// body...
	const router = useRouter();


	return (
		<>
		<Head>
		    <meta charset="UTF-8"/>
		    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		    <title>Login</title>
		</Head>
		<div className="h-[100vh] overflow-y-auto bg-gray-50 w-full bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_5DiU_iSr3')] 
		bg-cover bg-center bg-fixed">
		    <header className="fixed top-0 backdrop-blur-xl bg-white/20 z-50 flex items-center justify-between w-full 
		    px-3 py-2 border-b-[1px] border-gray-300/50 shadow-md">
		        <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p"
		        alt="" className="w-[150px] h-[50px] "/>   
		    </header>
		    <div className="w-full h-auto pt-[80px] flex items-center md:px-5 px-2">
		        <div class="w-[400px] px-3 py-2 rounded-xl border-[1px] border-gray-600/50 
		        backdrop-blur-md flex flex-col items-center">
		            <h1 class="text-xl font-bold text-gray-200 text-black">USER SIGNUP</h1>
		            <div class="mt-2 h-[1px] w-[95%] mx-auto bg-gray-600/30"></div>
		            <div class="mt-0 flex flex-col w-full">
		                <div class="rounded-md w-full py-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-800">Name</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="text" placeholder="Enter user name" 
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full pb-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-800">Email ID</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="email" placeholder="Enter email ID" 
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-800">Password</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" 
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full mt-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-800">Confirm password</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" 
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>

		                <button class="bg-blue-600 text-white w-full py-2 mt-4 rounded-md border-[1px] 
		                border-white/40 hover:scale-[102%] transition-all duration-200 ease-in-out">
		                    Sign up
		                </button>

		                <h1 class="text-sm text-gray-800 font-semibold mt-2 mb-2">Already have an account? 
		                    <span class="cursor-pointer hover:text-sky-500 text-sky-600"> Login</span></h1>

		            </div>
		        </div>
		    </div>

		</div>
		</>

	)
}