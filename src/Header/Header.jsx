import React, { useState } from "react";
import Logo from "../img/Logo.svg"
import "./Header.scss"
import * as FaIcons from "react-icons/fa"
import Menu from "./Menu";

const Header = () =>{
    const [burger, setBurger] = useState(false)
    const showBurger = () => setBurger(!burger)
    return (
        <>
        <header >
            <div className="block-size">
                <img src={Logo} alt="logo" />
                <FaIcons.FaBars className="burger-icon" onClick={showBurger} />
            <ul className="nav-list">
                <li><a href="register" >About me</a></li>
                <li><a href="register" >Relationships</a></li>
                <li><a href="register" >Requirements</a></li>
                <li><a href="register" >Users</a></li>
                <li><a href="register" >Sign Up</a></li>             
            </ul>
            </div>
           
        </header>
        <Menu burger={burger} setBurger={setBurger}/>
        </>
    )
}
export default Header