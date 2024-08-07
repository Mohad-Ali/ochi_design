import React from 'react'

const Cards = () => {
  return (
    <div className='w-full flex items-center gap-5 px-20 h-screen bg-zinc-900'>
        <div className='cardcontainer h-[50vh] w-1/2 '>
            <div className=' relative card w-full rounded-xl h-full flex items-center justify-center bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>&copy;2022-2024</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2 '>
            <div className='card relative w-1/2 flex items-center justify-center rounded-xl bg-[#212121] '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>Rating 5.0 on Clutch</button>
            </div>
            <div className='card relative w-1/2 rounded-xl  flex items-center justify-center bg-[#212121] '>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10'>Business Bootcamp Alumni</button>
            </div>
        </div>
    </div>
  )
}

export default Cards
