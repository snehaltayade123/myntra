import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Router, Routes } from 'react-router-dom'
import NavBar from './components/navBar'
import Landing from './components/Landing'
import Footer from './components/footer'
import Login from './components/profile/login'
import Home from './components/home'
import Profile from './components/profile/login'


function App() {
  return (
    <>
      <div className='w-full h-screen'>
         <Home/>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/profile" Component={Profile}></Route>
          {/* <Route ></Route> */}
        </Routes>
      </div>
    </>
  )
}

export default App
