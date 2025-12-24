import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'

const App = () => {
  return (
    <div  className="flex justify-center items-center min-h-screen">
      {/* <Home/> */}
      <SignIn/>
    </div>
  )
}

export default App