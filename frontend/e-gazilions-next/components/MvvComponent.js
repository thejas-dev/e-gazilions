import {motion} from 'framer-motion';



export default function MvvComonent({dat,j}){

    return (
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
        className={`px-5 py-10 flex group cursor-pointer bg-white 
        rounded-md md:w-[30%] w-[100%] items-center flex-col gap-2`}>
            <div className="p-3 rounded-full bg-gray-300/50">
            {
                dat.icon
            }</div> 
            <h1 className="text-lg font-semibold text-gray-800 mt-3">{dat.name}</h1>
            <p className="text-sm text-center text-gray-600 ">{dat.description}</p>

        </motion.div>


    )
}