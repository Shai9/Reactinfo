import React from 'react'
import ReactLogo from '../images/react.png'

export default function NavBar(){
  return (
    <nav className='nav'>
      <img className='img'  src= {ReactLogo} alt="ReactImage" />
    <h1 className='header'>Know React</h1>
      <ul className='nav-items'>
        <li>About</li>
        <li>Components</li>
        <li>UseState</li>
        <li>UseEffect</li>
      </ul>
    </nav>
  )
}