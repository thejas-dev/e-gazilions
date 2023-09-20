"use client"

import Image from 'next/image'
import Head from 'next/head';
import {LiaIndustrySolid} from 'react-icons/lia';
import {BiRecycle} from 'react-icons/bi';
import {BsBox} from 'react-icons/bs';
import {motion} from 'framer-motion';


export default function Home() {


    const data= [
    {
        icon:<LiaIndustrySolid className="h-12 w-12 text-black"/>,
        name:"Manufature",
        description:"Manufature the products"
    },{
        icon:<BiRecycle className="h-12 w-12 text-black"/>,
        name:"Recycle",
        description:"Recycle the products"
    },{
        icon:<BsBox className="h-12 w-12 text-black"/>,
        name:"Reuse",
        description:"Reuse the products"
    }   
    ]


  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
      <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
    </Head>
    <body>
        <header className="sticky top-0 backdrop-blur-xl bg-white/20 z-50 flex items-center justify-between w-full 
        px-3 py-2 border-b-[1px] border-gray-300/50 bg-white/50 shadow-md">
            <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_varCimS-p"
            alt="" className="w-[150px] h-[50px] "/>   
            <div className="flex items-center gap-7 pr-3">
                <a href="#home" className="text-black hover:text-sky-500" >Home</a>
                <a href="#home" className="text-black hover:text-sky-500" >About us</a>
                <a href="#home" className="text-black hover:text-sky-500" >Redeem</a>
                <a href="/login" className="text-black hover:text-sky-500">Sign in</a>
            </div>
        </header>
        
        
        <div id="hero" className="h-[100vh]">
            <div className="bg-image">
                <div className="card rounded-md cursor-pointer bg-white mt-10 p-1" style={{width: "20rem", height: "25rem"}}>
                    <img src="https://ik.imagekit.io/d3kzbpbila/thejashari_ikjx3UOmf" className="w-full rounded-t-md " alt="..."/>
                    <div className="card-body p-2">
                        <h5 className="card-title text-2xl">E-Gazilion</h5>
                        <p className="card-text text-lg">"Empowering a sustainable future, one discarded device at a time."</p>
                        <button className="btn btn-primary bg-blue-600 mt-4 rounded-md text-white hover:scale-[105%] transition-all duration-200 
                        ease-in-out px-4 py-3">Know More</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="mvv" className="min-h-[100vh] flex flex-col items-center 
        pt-[50px] bg-gray-100 w-full gap-5">
            <h1 className="text-2xl font-semibold text-gray-900">Product lifecycle</h1>
            <div className="flex md:flex-row flex-col items-center px-10 justify-between w-full mt-[80px] gap-5">
                {
                    data.map((dat,j)=>(
                        <motion.div 
                        initial={{
                            opacity:0,
                            x:-50
                        }}
                        whileInView={{
                            opacity:1,
                            x:0
                        }}
                        transition={{
                            duration:0.5
                        }}
                        className={`px-5 py-10 flex bg-white rounded-md md:w-[30%] w-[100%] items-center flex-col gap-5`}>
                            <div className="p-3 rounded-full bg-gray-300/50">
                            {
                                dat.icon
                            }</div> 
                            <h1 className="text-lg font-semibold text-gray-800">{dat.name}</h1>
                            <p className="text-md text-center font-semibold text-gray-600 ">{dat.description}</p>

                        </motion.div>

                    ))
                }
            </div>
        

        </div>

      </body> 
    </>
  )
}


// div>
//         <div className="d-flex flex-row justify-content-start">
//             <img src=""/>
//             <h1>Manufature</h1>
//             <p></p>
//         </div>
//         <div>
//             <img src=""/>
//             <h1>Recycle</h1>
//             <p></p>
//         </div>
//         <div>
//             <img src=""/>
//             <h1>Reuse</h1>
//             <p></p>
//         </div>
//         </div>