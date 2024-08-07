import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.4" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20'>         
            {["We create","Eye Opening","Presentations"].map((item,index)=>{
                    return (<div className="masker ">
                      <div className='w-fit flex items-end'>
                        {index===1 && (
                        <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}} className='w-[8vw] mr-[0.5vw] h-[5.3vw] rounded-md overflow-hidden top-[1.5vw]  relative '><img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" /></motion.div>
                        )}
                     <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[7vw] font-['Founders Grotesk X-Condensed'] leading-[5vw] tracking-tighter font-bold ">{item}</h1>
                 </div>
                 </div>
            )
            })}

        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
          {["For pubic and private compaines","From the first pitch to IPO"].map((item,index)=>(
            <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
          ))}
          <div className='start flex items-center  gap-5'>
            <div className='px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase '>start the project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-400 flex items-center justify-center rounded-full'>
              <span className='rotate-[45deg]'>
              <FaArrowUpLong/>
              </span>
              </div> 
          </div>
        </div>
      
    </div>
  )
}

export default LandingPage
