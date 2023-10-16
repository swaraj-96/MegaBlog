import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(true)   //initially loading purpose
  const dispatch = useDispatch()   //dispatch data to authslice/feature

  useEffect(() => {     //to check whether on loading account is login or logout
    authService.getCurrentUser()
    .then((userData) => {   
      if (userData) {     // if login dispatch the data to login feature
        dispatch(login({userData}))
      } else {
        dispatch(logout())   //if not login then on loading make account logout
      }
    })
    .finally(() => setLoading(false))  // finally set the loading work over
  }, [])

  return !loading ? (   //conditional rendering if not loading then shows below things else null
        <div className='min-h-screen flex flex-wrap content-between bg-blueGray relative'>
          <div className='w-full block'>
            <Header/>
            <main className='mb-8' >
              <Outlet/>
            </main>
            <Footer/>
          </div>
        </div>
  ) : null
}

export default App
