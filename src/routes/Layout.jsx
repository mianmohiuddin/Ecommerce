import React from 'react'
import { useMatch } from 'react-router-dom'
import Footer from '../components/footer'
import NavBar from '../components/NavBar'

const Layout = ({children}) => {
    const login = useMatch("login");
    const signup = useMatch("signup");
    
    // const isAccessible = (!login && !signup)
    const isAccessible = true;
    
  return (
    <div>
      {isAccessible  && (  <NavBar /> )}
        {children}
      {isAccessible && (  <Footer /> )}
    </div>
  )
}

export default Layout