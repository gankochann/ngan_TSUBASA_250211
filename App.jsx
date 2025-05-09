
import { BrowserRouter, Link, NavLink, Route, Router, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFount from './pages/NotFount'
import Contact from './pages/Contact'
import ListUser from './pages/ListUser'
import UserDetail from './pages/UserDetail'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <nav style={{display:"flex" , gap:15}}>
     <NavLink className={({ isActive }) =>
      `p-5 ${isActive ? "bg-red-400" : ""}`
     } to="">Home</NavLink>

     <NavLink className={({isActive}) =>
      `p-5 ${isActive ? "bg-blue-400" : ""}`} to="/login">Login</NavLink>

     <NavLink className={({ isActive }) =>
       `p-5 ${isActive ? "bg-yellow-400" : ""}`
      } to="/contact">Contact</NavLink>
    </nav>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFount />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        *******************
        <Route path="" element={<ListUser />}></Route>
        <Route path="user-detail/:id" element={<UserDetail />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
