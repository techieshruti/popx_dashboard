import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-end items-center h-full px-6 py-14'>
        <div className=' w-65'>
            <h1 className='font-bold text-xl'>Welcome to PopX</h1>
        <p className='pb-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
        
        <div className='flex flex-col gap-2'>
            <button 
        className='bg-[#6C25FF] text-white font-bold rounded-lg px-8 py-2'
        >Create Account</button>
        <button
        className='bg-[#CEBAFB] font-bold rounded-lg px-8 py-2 text-gray-800'
        >Already Registered? Login</button>
        </div>
    </div>
  )
}

export default Home