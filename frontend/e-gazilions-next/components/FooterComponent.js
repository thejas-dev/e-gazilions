import {BiLogoFacebook,BiLogoLinkedin} from 'react-icons/bi';
import {BsReddit} from 'react-icons/bs';
import {AiOutlineCopyrightCircle,AiOutlineGooglePlus,AiOutlineTwitter} from 'react-icons/ai'
import Link from 'next/link'

export default function FooterComponent(){

    const data = [
        {
            icon:<AiOutlineGooglePlus className="text-white h-7 w-7"/> ,
            color:"bg-red-500",
            link:""
        },{
            icon:<AiOutlineTwitter className="text-white h-7 w-7"/> ,
            color:"bg-sky-500",
            link:""
        },{
            icon:<BiLogoFacebook className="text-white h-7 w-7"/> ,
            color:"bg-blue-600",
            link:""
        },{
            icon:<BiLogoLinkedin className="text-white h-7 w-7"/> ,
            color:"bg-blue-700",
            link:""
        },{
            icon:<BsReddit className="text-white h-7 w-7"/> ,
            color:"bg-pink-500",
            link:""
        },
    ];

    return (
        <main className="w-full flex flex-col  pt-7 gap-5 bg-gray-200">
            <div className='w-full'>
                <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p" alt="" 
                className="mx-auto w-[150px] h-[50px]" />
                <p className="text-md text-gray-800 text-center">to protect the environment</p>
            </div> 
            
            <div className="flex items-center flex-wrap gap-7 px-3 justify-center mx-auto">
                <Link href="#home" className="text-black hover:text-sky-500" >Home</Link>
                <Link href="/aboutus" className="text-black hover:text-sky-500" >About us</Link>
                <Link href="/collectionprocess" className="text-black hover:text-sky-500" >Collection process</Link>
                <Link href="#home" className="text-black hover:text-sky-500" >Redeem</Link>
                <Link href="/login" className="text-black hover:text-sky-500">Sign in</Link>
            </div>

            <div className="border-y-[1px] py-5 border-gray-300 flex items-center justify-center gap-2">
                <h1 className="text-lg font-semibold text-gray-800">Register for free</h1>
                <Link href="/signup">
                    <button className="text-white rounded-full px-8 py-3 bg-red-600">Sign up</button>
                </Link> 
            </div>

            <div className="py-1 px-4 flex items-center justify-center gap-5">
                {
                    data?.map((dat,j)=>(
                        <div key={j} className={`${dat?.color} cursor-pointer hover:scale-[105%] 
                        transition-all duration-200 ease-in-out p-2 rounded-full`}>
                            {dat?.icon}
                        </div>
                    ))
                }

            </div>

            <div className="flex items-center justify-center py-3 bg-gray-500 text-white gap-2 text-md">
                © 2023 E-Gazilion. All rights reserved.
            </div>
        </main>

        
    )
}