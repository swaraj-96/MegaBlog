import React from 'react';
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn () {
    const dispatch = useDispatch()  //dispatch the logout update information to store
    const logoutHandler = () => {
        authService.logout().then( () => {  //logout is a promise inside appwrite backend so we use .then
            dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-black hover:text-white rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn