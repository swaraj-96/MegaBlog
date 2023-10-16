import React from 'react';
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header () {

  const authStatus = useSelector((state) => state.auth.status)  //to check the status of stste in authSlice.js
  const navigate = useNavigate()  //to navigate in navbar array

  const navItems = [  // array of object for navbar so that we donot have to write every new navbar item later
    {
      name: 'Home',   
      slug: "/",
      active: true
    }, 
    {
      name: "Login",         //name of navbar item
      slug: "/login",        // path defined
      active: !authStatus,   //depend upon the status of authStatus
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (   // header -> container -> nav -> {div ->(link -> logo)} -> ul -> all navitems by map method depend upon authStatus
    <header className='py-3  bg-zinc-300  top-0 sticky w-full z-40 shadow-2xl shadow-blueGray'>  
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />

              </Link>
          </div>
          <ul className='flex ml-auto'>
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-black hover:text-white rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header