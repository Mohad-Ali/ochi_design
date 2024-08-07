
import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden border-zinc-300'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[20vw] leading-none  font-mfnt tracking-tighter -mb-[1vw] pr-20 -mt-[1vw]  uppercase  font-extrabold'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:10}} className='text-[20vw] leading-none  font-mfnt tracking-tighter -mb-[1vw] pr-20 -mt-[1vw]  uppercase  font-extrabold'>we are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
// initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity, duration:5}} 