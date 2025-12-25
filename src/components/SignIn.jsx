import React from 'react'

const SignIn = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className="w-[375px] h-[812px] bg-gray-50 border border-gray-200 px-6 pt-10">
            <div className='mr-30'>
              <h1 className='text-2xl font-bold text-gray-900 mb-2 '>Signin to your PopX account</h1>
            <p className='text-gray-400 mb-6 font-semibold leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='relative'>
              <label 
            className='block absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF]'
            htmlFor="email">Email Address</label>
            </div>

            <input 
            className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none mb-4'
            type="email" placeholder='Enter email address' />

            <div className='relative'>
              <label 
            className='block absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF] mb-1'
            htmlFor="password">Password</label>
            </div>
            <input 
            className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none'
            type="password" placeholder='Password' />

            <button 
            className='w-full bg-purple-300 text-white font-semibold py-3 rounded-md cursor-pointer mt-2'>Login</button>
        </div>

    </div>
  )
}

export default SignIn