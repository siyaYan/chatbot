import React from 'react'
import Logo from "../assets/1.png";
import "./header.css"

export const Header = () => {
  return (
    <div>
        <img className="logo" src={Logo} alt="" />
        <a href="/">Home</a>
        </div>
  )
}
