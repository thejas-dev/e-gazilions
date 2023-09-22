"use client"
import Head from 'next/head';
import {useRouter} from 'next/navigation'
import {useState} from 'react';
import { currentUserState } from '@/atoms/userAtom';
import {login} from '../../utils/ApiRoutes'
import { useRecoilState } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import {toast,ToastContainer} from 'react-toastify';
import axios from 'axios';



export default function Home() {
	// body...
	const router = useRouter();
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [currentUser,setCurrentUser] = useRecoilState(currentUserState)
	const [loading,setLoading] = useState(false);

	const toastOption={
		position:"bottom-right",
		autoClose:8800,
		pauseOnHover:true,
		draggable:true,
		theme:"light",
	}

	const handleValidation = async() => {
		if(email.length > 5 && password.length > 3){
			setLoading(true);
			const {data} = await axios.post(login,{
				email,password
			})
			if(data.status){
				setLoading(false);
				setCurrentUser(data.user)
				router.push('/')
			}else{
				setLoading(false);
				toast(data.msg,toastOption)
			}
		}else{
			toast('Please enter the required fields',toastOption)
		}
	}

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
		        backdrop-blur-md flex flex-col items-center relative overflow-hidden">
					<div className={`absolute ${loading ? 'h-full w-full' : 'h-0 w-0'}  flex items-center justify-center
					z-50 overflow-hidden top-0 left-0 bg-black/50`}>
						<span className='loader'/>
					</div>
		            <h1 className="text-xl font-bold text-gray-300">USER LOGIN</h1>
		            <div className="mt-2 h-[1px] w-[95%] mx-auto bg-gray-600/30"></div>
		            <div className="mt-0 flex flex-col w-full">
		                <div className="rounded-md w-full  py-3 flex flex-col gap-1 ">
		                    <h1 className="text-md font-semibold text-gray-200">Email ID</h1>
		                    <div className="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="email" placeholder="Enter email ID"  value={email}
								onChange={(e)=>setEmail(e.target.value)}
		                        className="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div className="rounded-md w-full flex flex-col gap-1 ">
		                    <h1 className="text-md font-semibold text-gray-200">Password</h1>
		                    <div className="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" value={password}
								onChange={(e)=>setPassword(e.target.value)}
		                        className="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>

		                <button 
						onClick={handleValidation}
						className="bg-blue-600 text-white w-full py-2 mt-4 rounded-md border-[1px] 
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
			<ToastContainer />
		</div>
		</>

	)
}
