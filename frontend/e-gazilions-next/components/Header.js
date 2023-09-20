"use client"

import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { currentUserState } from '@/atoms/userAtom';
import {AiOutlineMenu} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import {useState} from 'react';

export default function Header(){
    const [currentUser,setCurrentUser] = useRecoilState(currentUserState);
    const [openSidebar,setOpenSidebar] = useState(false)


    return(
        <header className="sticky top-0 backdrop-blur-xl bg-white/20 z-50 flex items-center justify-between w-full 
        px-3 py-2 border-b-[1px] border-gray-300/50 bg-white/50 shadow-md">
            <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p"
            alt="" className="w-[150px] h-[50px] cursor-pointer "
            onClick={()=>window.scrollTo(0,0)}
            />   
            <div className="md:flex hidden items-center gap-7 pr-3">
                <Link href="#home" className="text-black hover:text-sky-500" >Home</Link>
                <Link href="/aboutus" className="text-black hover:text-sky-500" >About us</Link>
                <Link href="/collectionprocess" className="text-black hover:text-sky-500" >Collection process</Link>
                <Link href="#home" className="text-black hover:text-sky-500" >Redeem</Link>
                {
                    currentUser ? 
                    <img src={currentUser.image} alt='' className='h-7 w-7 rounded-full shadow-lg'/>
                    :
                    <Link href="/login" className="text-black hover:text-sky-500">Sign in</Link>
                }
            </div>
            <div 
            onClick={()=>setOpenSidebar(true)}
            className='p-2 hover:bg-gray-300/30 md:hidden relative rounded-full cursor-pointer'>
                <AiOutlineMenu className="h-7 w-7 text-black"/>
            </div>
            <div className={`h-[100vh] ${openSidebar ? 'top-0 left-0' : 'top-0 -left-[100%]'} 
            transition-all duration-300 ease-in-out fixed w-full bg-white/90 px-2 py-3  
            backdrop-blur-lg z-50`}>
                <div className="w-full flex justify-end">
                    <RxCross1 onClick={()=>setOpenSidebar(false)} 
                    className="h-7 w-7 text-black cursor-pointer"/>
                </div>
                <div className="flex flex-col justify-center h-full items-center gap-7 pr-3">
                    <Link href="#home" className="text-black text-lg hover:text-sky-500 font-semibold" >Home</Link>
                    <Link href="/aboutus" className="text-black text-lg hover:text-sky-500 font-semibold" >About us</Link>
                    <Link href="/collectionprocess" className="text-black text-lg hover:text-sky-500 font-semibold" >Collection process</Link>
                    <Link href="#home" className="text-black text-lg hover:text-sky-500 font-semibold" >Redeem</Link>
                    {
                        currentUser ? 
                        <div className="flex items-center gap-3">
                            <img src={currentUser.image} alt='' className='h-7 w-7 rounded-full shadow-lg'/>
                            <h1 className='text-lg text-gray-800'>{currentUser?.name}</h1>
                        </div> 
                        :
                        <Link href="/login" className="text-black text-lg hover:text-sky-500 font-semibold">Sign in</Link>
                    }
                </div>
            </div> 
        </header>

    )
}