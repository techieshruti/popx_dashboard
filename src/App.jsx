import React from 'react'
import Home from './components/Home'
import SignIn from './components/SignIn'
import Account from './components/Account'

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