import React from 'react'

const Footer = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="" className='w-full h-screen flex p-20 font-mfnt bg-zinc-900'>
        <div className='w-1/2 h-full flex justify-between '>
            <div className='heading'>
            <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-3 tracking-tighter '>Eye-</h1>
            <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-3 tracking-tighter '>Opening</h1>
            </div>
        </div>
        <div className='w-1/2 h-full'>
        <h1 className='text-[7vw] font-semibold uppercase leading-none -mb-3 tracking-tighter '>presentations</h1>
        <div className='w-full h-full gap-10 flex font-abc'>
            <div className='w-1/2 h-full flex flex-col'>
            <div className='w-full pt-10'>
            <h1 className='pb-5'>S:</h1>
            {["Instagram","Facebook","linkedin","twitter"].map((item,index)=>(
            <a key={index} className='block underline capitalize' href="#">{item}</a>
          ))}
           </div>
              <div className='w-full pt-10'>
              <h1 className='pb-5'>L:</h1>
              {["202-195W 4th Ave","Vancouver,Canada","30 Chukarina st","Lviv Ukraine"].map((item,index)=>(
                <a key={index} className='block underline capitalize' href="#">{item}</a>
              ))}
              </div>
              <div className='w-full   '>
              <h1 className='pt-10'>E:</h1>
                <a className='block underline pt-5 capitalize' href="#">hell@ochi.design</a>
              </div>  
        </div>
               
        <div className='w-1/2  h-full relative'>
          <div className='absolute pl-12 top-1/3 left-2/4'>
            <h1 className='mt-12 mb-5 '>M</h1>
          {["Home","Service","Our work","About us","Contact us"].map((item,index)=>(
            <a key={index} className='block underline capitalize' href="#">{item}</a>
          ))}
          </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
