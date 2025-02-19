import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <ul className=' w-full h-[7%] z-50 fixed bg-violet-300 flex flex-row justify-around '>
         <li className=' hover:cursor-pointer'>
        <Link to="topBanner" smooth={true} duration={700} >معرفی</Link> 
        </li>
        <li className=' hover:cursor-pointer'>
        <Link to="aboutme" smooth={true} duration={700} >درباره من</Link> 
        </li>
        <li className=' hover:cursor-pointer'>
        <Link to="projects" smooth={true} duration={700} >پروژه ها</Link> 
        </li>
        <li className=' hover:cursor-pointer'>
        <Link to="contactMe" smooth={true} duration={700} >تماس با من</Link> 
        </li>
    </ul>
  )
}

export default Header