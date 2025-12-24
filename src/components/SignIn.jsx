import React from 'react'

const SignIn = () => {
  return (
    <div className='w-[300px] h-[550px] flex pb-8 bg-gray-50 border border-gray-300 justify-end px-4 pt-8'>
        <div>
            <h1 className='font-bold text-2xl text-gray-800 pr-16'>Signin to your PopX account</h1>
            <p className='text-gray-500 py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <label htmlFor="email">Email Address</label>
            <input 
            className='bg-white px-10 py-2 rounded border border-gray-200'
            type="email" placeholder='Enter email address' />

            <label htmlFor="email">Password</label>
            <input 
            className='bg-white px-10 py-2 rounded border border-gray-200'
            type="email" placeholder='Enter password' />

            <button className='bg-[#6C25FF] px-28 py-2 my-2 rounded border text-white border-gray-200'>Login</button>
        </div>

    </div>
  )
}

export default SignIn