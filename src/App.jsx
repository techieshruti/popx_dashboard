import React from 'react'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Account from './Pages/Account'

const formData=[
  {id:1, label:"Full Name", placeholder:"Enter your name", type: "text"},
  {id:2, label:"Phone number", placeholder:"Enter phone number", type: "tel"},
  {id:3, label:"Email address", placeholder:"Enter email",type: "email"},
  {id:4, label:"Password", placeholder:"Enter password", type: "password"},
  {id:5, label:"Company Name", placeholder:"Enter company name", type: "text"},
]

const App = () => {
  return (
    <div  className="flex justify-center items-center min-h-screen">
      {/* <Home/> */}
      {/* <SignIn/> */}
     <Account formData={formData}/>
      
    </div>
  )
}

export default App