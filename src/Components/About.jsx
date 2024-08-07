import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full p-20 bg-[#CEEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='w-[70vw] font-["Neue_Montreal"] text-[3.5vw] leading-[3.3vw] tracking-tight'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className=' flex gap-5 w-full border-t-[1px] pt-5 mt-20 border-[#a7b280]'>
        <div className='w-1/2'>
            <h1 className='text-[3.5vw]'>Our approach:</h1>
            <button className='px-8 py-5 uppercase text-white rounded-full mt-5 bg-zinc-900 flex items-center gap-10'>Read more
            <div className='w-3 h-3 bg-zinc-100 rounded-full '></div>
            </button>
        </div>
      <div className=' w-1/2 h-[60vh] bg-[#b7ce65] overflow-hidden rounded-3xl '><img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>

    </div>
  )
}

export default About
