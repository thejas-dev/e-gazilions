"use client"
import {motion} from 'framer-motion';

export default function Home(){


    return (
        <main className="w-full min-h-[100vh] bg-gray-100">
                {/*Tarinisri*/}

                <h1 className="block bg-green-600 m-4  ">Collection Process</h1>

                
                <div className="container block bg-green-400">
                     <h3>Step-1</h3> 
                     <motion.img 
                     initial={{
                        opacity:0
                     }}
                     whileInView={{
                        opacity:1
                     }}
                     viewport={{
                        once:true
                     }}
                     transition={{
                        duration:1.4
                     }}
                     src="https://static.wixstatic.com/media/ed60a9_0cbed34d949647fe9bb90e49e75531e2~mv2.webp/v1/fill/w_1600,h_800,al_c/ed60a9_0cbed34d949647fe9bb90e49e75531e2~mv2.webp" alt="image1" width="600" height="400"/>
                    
                    <p>Scan the QR code on the machine,You will get an url.click that you will be redirected to our website.</p> 
                </div>       

                <div className="container">
                    <h3>Step-2</h3>
                    <motion.img 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                        opacity:1
                    }}
                    viewport={{
                        once:true
                    }}
                    transition={{
                        duration:1.4
                    }}
                    src="https://yaffa-cdn.s3.amazonaws.com/packaging/images/dmImage/StandardImage/GoScan_Coffee.jpg" alt="image2" width="600" height="400"/>

                    <p>Scan your e-waste</p> 
                </div>     

                <div className="container">
                    <h3>Step-3</h3> 
                    <motion.img 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                        opacity:1
                    }}
                    viewport={{
                        once:true
                    }}
                    transition={{
                        duration:1.4
                    }}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb4eSenZmufqbOtw-UbYBR-p0r96fZiVYQshG5GJKmthWPHA_5SFIj7EytSHv0v52exhI&usqp=CAU" alt="image1" width="600" height="400"/>
                
                    <p>Stick the label on your e-waste.</p> 
                </div>     

                <div className="container">
                    <h3>Step-4</h3> 
                    <motion.img 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                        opacity:1
                    }}
                    viewport={{
                        once:true
                    }}
                    transition={{
                        duration:1.4
                    }}
                    src="https://imgs.waste-management-world.com/m/2944_2_1200-0-1.85_.jpg" alt="image1" width="600" height="400"/>
                    
                    <p>Scan the label and drop it inside the machine when it opens</p> 
                </div>            
     
        

        </main>

    
    )
}
