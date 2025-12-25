import { BrowserRouter, Routes, Route } from "react-router-dom";import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import Account from './Pages/Account'
import Profile from './Pages/Profile'

const formData=[
  {id:1, label:"Full Name", placeholder:"Enter your name", type: "text"},
  {id:2, label:"Phone number", placeholder:"Enter phone number", type: "tel"},
  {id:3, label:"Email address", placeholder:"Enter email",type: "email"},
  {id:4, label:"Password", placeholder:"Enter password", type: "password"},
  {id:5, label:"Company Name", placeholder:"Enter company name", type: "text"},
]

const App = () => {
  return (
     <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/account" element={<Account formData={formData} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App