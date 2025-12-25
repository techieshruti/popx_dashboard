import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Account from './components/Account'

const formData=[
  {id:1, label:"Full Name", placeholder:"Enter your name"},
  {id:1, label:"Phone number", placeholder:"Enter phone number"},
  {id:1, label:"Email address", placeholder:"Enter email"},
  {id:1, label:"Password", placeholder:"Enter password"},
  {id:1, label:"Company Name", placeholder:"Enter company name"},
]

const App = () => {
  return (
    <div  className="flex justify-center items-center min-h-screen">
      {/* <Home/> */}
      {/* <SignIn/> */}
      {formData.map((data,id)=>(
        <Account key={id} data={formData}/>
      ))}
      
    </div>
  )
}

export default App