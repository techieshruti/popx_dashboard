import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Account from './components/Account'

const formData=[
  {id:1, name:"Sam", phone:123456789, email:"sam@gmail.com", password:"123", company:"company"}
]

const App = () => {
  return (
    <div  className="flex justify-center items-center min-h-screen">
      {/* <Home/> */}
      {/* <SignIn/> */}
      <Account/>
    </div>
  )
}

export default App