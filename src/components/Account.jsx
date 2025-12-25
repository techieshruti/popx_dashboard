import React from 'react'

const Account = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
        <div className='w-[375px] h-[812px] bg-gray-50 border border-gray-200 px-6 pt-10'>
            <h1 
            className='text-3xl font-bold mr-20 pb-4'
            >Create your PopX account</h1>
            <form action="">
               <div className='relative'>
              <label 
            className='block absolute -top-2 left-3 bg-white px-1 text-xs text-[#6C25FF] mb-1'
            htmlFor="password">Full Name</label>
            </div>
            <input 
            className='w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none'
            type="text" placeholder='Enter your name' />

                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="text" />
                <input type="radio" />
            </form>
            <button 
            className='w-full bg-purple-300 text-white font-semibold py-3 rounded-md cursor-pointer mt-2'>Create Account</button>
        </div>
    </div>
  )
}

export default Account