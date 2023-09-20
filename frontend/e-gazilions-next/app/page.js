"use client"

import Image from 'next/image'
import Head from 'next/head';
import {LiaIndustrySolid} from 'react-icons/lia';
import {BiRecycle} from 'react-icons/bi';
import {BsBox} from 'react-icons/bs';
import {motion} from 'framer-motion';
import Link from 'next/link';
import VideoComponent from '../components/VideoComponent';
import ReactPlayer from "react-player/lazy";
import Header from '../components/Header'
import FooterComponent from '../components/FooterComponent';
import dynamic from 'next/dynamic';
import MvvComponent from '@/components/MvvComponent';
// const DynamicMvvComponent = dynamic(()=>{
//     import('../components/MvvComponent'),{ssr:false}
// })

export default function Home() {


    const data= [
    {
        icon:<LiaIndustrySolid className="h-12 w-12 text-black group-hover:text-sky-500 transition-all duration-200
        ease-in-out"/>,
        name:"Manufature",
        description:"Manufature the products"
    },{
        icon:<BiRecycle className="h-12 w-12 text-black group-hover:text-sky-500 transition-all duration-200
        ease-in-out"/>,
        name:"Recycle",
        description:"Recycle the products"
    },{
        icon:<BsBox className="h-12 w-12 text-black group-hover:text-sky-500 transition-all duration-200
        ease-in-out"/>,
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
    <body className='scroll-smooth' >
        <Header />
        
        
        <div id="hero" className="h-[100vh]">
            <div className="bg-image">
                <div className="card rounded-md cursor-pointer bg-white mt-10 p-1 w-[20rem] h-[25rem] ">
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
        pt-[50px] bg-gray-100 w-full gap-5 pb-5">
            <h1 className="text-2xl font-semibold text-gray-900">Product lifecycle</h1>
            <div className="flex md:flex-row flex-col items-center px-10 justify-between w-full mt-[80px] gap-5">
                {
                    data.map((dat,j)=>(
                        <MvvComponent dat={dat} j={j} key={j}/>

                    ))
                }
            </div>
        

        </div>
        <div className="min-h-[125vh] flex flex-col items-center 
        pt-[160px] w-full gap-5 relative">
            <div className="z-0 top-0 left-0 w-full h-full absolute">
              <div className="h-full w-full relative">
                <div className="w-full absolute h-full bg-black/70 z-20"></div>
              <ReactPlayer 
              width="100%"
              height="100%" 
              autoPlay={true} controls={false}
              className="z-10"
              playing
              muted
              url="https://www.youtube.com/embed/k5-OPWYRXZ0?si=foX08WHqtBskN0CM" 
              light=""/>
                
              </div>
            
            </div> 
            <div className='info flex md:flex-row z-10 flex-col px-5 py-2 gap-5'>
                <img src="https://www.genevaenvironmentnetwork.org/wp-content/uploads/2020/09/ewaste-aspect-ratio-2000-1200-1024x614.jpg" 
                alt="" width="600" className='mx-auto'  height="400"></img>
                <div className="item flex flex-col justify-center gap-5">
                  <span className="text-2xl font-semibold text-white">E-waste</span>
                  <p className='para text-md text-gray-200'>E-waste management causes stem from the rapid growth of electronic devices and our consumer-driven culture. The importance of reducing e-waste lies in its environmental and social impacts. Electronic waste often contains hazardous materials that can leach into the environment, posing risks to ecosystems and human health. Proper management reduces these risks, conserves valuable resources through recycling, and minimizes energy consumption compared to manufacturing new devices. Additionally, responsible e-waste management creates job opportunities, supports sustainable production practices, and aligns with global efforts to address the growing e-waste problem, promoting a cleaner and more sustainable future.
                  </p>
                </div>
            </div>           
        </div>

        <VideoComponent  />
        <FooterComponent />
        

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