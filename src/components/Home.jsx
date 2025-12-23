import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-2 items-start justify-center'>
        <h1 className='font-bold text-xl'>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. B</p>
        <button 
        className='bg-purple-500 rounded-lg px-10 py-2'
        >Create Account</button>
        <button
        className='bg-purple-300 rounded-lg px-10 py-2'
        >Already Registered? Login</button>
    </div>
  )
}

export default Home