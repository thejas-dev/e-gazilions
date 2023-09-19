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
		<div className="h-[100vh] bg-gray-50 w-full bg-[url('https://ik.imagekit.io/d3kzbpbila/thejashari_5DiU_iSr3')] 
		bg-cover bg-center">
		    <header className="fixed top-0 backdrop-blur-xl bg-white/20 z-50 flex items-center justify-between w-full 
		    px-3 py-2 border-b-[1px] border-gray-300/50 shadow-md">
		        <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p"
		        alt="" className="w-[150px] h-[50px] "/>   
		    </header>
		    <div className="w-full h-auto pt-[140px] flex items-center md:px-5 px-2">
		        <div className="w-[400px] px-3 py-2 rounded-xl border-[1px] border-gray-600/50 
		        backdrop-blur-md flex flex-col items-center">
		            <h1 className="text-xl font-bold text-gray-900 text-black">USER LOGIN</h1>
		            <div className="mt-2 h-[1px] w-[95%] mx-auto bg-gray-600/30"></div>
		            <div className="mt-0 flex flex-col w-full">
		                <div className="rounded-md w-full  py-3 flex flex-col gap-1 ">
		                    <h1 className="text-md font-semibold text-gray-800">Email ID</h1>
		                    <div className="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="email" placeholder="Enter email ID" 
		                        className="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div className="rounded-md w-full flex flex-col gap-1 ">
		                    <h1 className="text-md font-semibold text-gray-800">Password</h1>
		                    <div className="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" 
		                        className="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>

		                <button className="bg-blue-600 text-white w-full py-2 mt-4 rounded-md border-[1px] 
		                border-white/40 hover:scale-[102%] transition-all duration-200 ease-in-out">
		                    Login
		                </button>

		                <h1 className="text-sm text-gray-800 font-semibold mt-2 mb-2">New user? 
		                    <span 
		                    onClick={()=>router.push('/signup')}
		                    className="cursor-pointer hover:text-sky-500 text-sky-600"> Sign up</span></h1>

		            </div>
		        </div>
		    </div>

		</div>
		</>

	)
}