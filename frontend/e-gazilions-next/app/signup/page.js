"use client"
import Head from 'next/head';
import {useRouter} from 'next/navigation'
import {login, register} from '../../utils/ApiRoutes';
import axios from 'axios'
import ImageKit from "imagekit";
import {use, useState} from 'react';
import { currentUserState } from '@/atoms/userAtom';
import { useRecoilState } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import {toast,ToastContainer} from 'react-toastify';


export default function Home() {
	// body...
	const router = useRouter();
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [confirmPassword,setConfirmPassword] = useState('');
	const [image,setImage] = useState('https://ik.imagekit.io/d3kzbpbila/thejashari_cktnTcxvv?updatedAt=1694788139311');
	const [loading,setLoading] = useState(false);
	const [currentUser,setCurrentUser] = useRecoilState(currentUserState)

	var imagekit = new ImageKit({
	    publicKey : process.env.NEXT_PUBLIC_IMAGEKIT_ID,
	    privateKey : process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE,
	    urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_ENDPOINT
	});
	
	const toastOption={
		position:"bottom-right",
		autoClose:8800,
		pauseOnHover:true,
		draggable:true,
		theme:"light",
	}

	const handleValidation = async() => {
		if(name.length > 4 && email.length > 4 && password.length > 4 && (confirmPassword === password)){
			setLoading(true)
			const {data} = await axios.post(register,{
				name,email,password,image
			})
			if(data.status){
				setLoading(false);
				setCurrentUser(data.user)
				router.push('/')
			}else{
				setLoading(false)
				toast(data.msg,toastOption);
			}
		}else{
			if(password !== confirmPassword){
				toast('Password not matching!',toastOption)
			}else{
				toast('Please fill the reqiured fields!',toastOption)
			}
		}
	}

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
		        backdrop-blur-md flex flex-col items-center relative overflow-hidden">
					<div className={`absolute ${loading ? 'h-full w-full' : 'h-0 w-0'}  flex items-center justify-center
					z-50 overflow-hidden top-0 left-0 bg-black/50`}>
						<span className='loader'/>
					</div>
		            <h1 class="text-xl font-bold text-gray-200 text-black">USER SIGNUP</h1>
		            <div class="mt-2 h-[1px] w-[95%] mx-auto bg-gray-600/30"></div>
		            <div class="mt-0 z-0 flex flex-col w-full">
		                <div class="rounded-md w-full py-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-200 text-start">Name</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="text" placeholder="Enter user name" value={name}
								onChange={(e)=>setName(e.target.value)}
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full pb-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-200 text-start">Email ID</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="email" placeholder="Enter email ID" value={email}
								onChange={(e)=>setEmail(e.target.value)}
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-200 text-start">Password</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" value={password}
								onChange={(e)=>setPassword(e.target.value)} 
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>
		                <div class="rounded-md w-full mt-3 flex flex-col gap-1 ">
		                    <h1 class="text-md font-semibold text-gray-200 text-start">Confirm password</h1>
		                    <div class="bg-white/30 flex items-center px-2 py-2 gap-2 backdrop-blur-md
		                    border-[1px] focus-within:border-sky-500 border-gray-500 rounded-md">
		                        <input type="password" placeholder="Enter password" value={confirmPassword}
								onChange={(e)=>setConfirmPassword(e.target.value)}
		                        class="bg-transparent outline-none w-full text-md text-gray-800 placeholder:text-gray-700"
		                        />
		                    </div>
		                </div>

		                <button 
						onClick={handleValidation}
						class="bg-blue-600 text-white w-full py-2 mt-4 rounded-md border-[1px] 
		                border-white/40 hover:scale-[102%] transition-all duration-200 ease-in-out">
		                    Sign up
		                </button>

		                <h1 class="text-sm text-gray-300 font-semibold mt-2 mb-2">Already have an account? 
		                    <span class="cursor-pointer hover:text-sky-500 text-sky-600"> Login</span></h1>

		            </div>
		        </div>
		    </div>
			<ToastContainer/>

		</div>
		</>

	)
}
