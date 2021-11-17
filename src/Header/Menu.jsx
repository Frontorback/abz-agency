import React from "react";
import "./Menu.scss"
import Logo from "../img/Logo.svg"

const Menu = ({burger, setBurger}) =>{

    const items =[{name:"About me", href:"#register"}, {name:"Relationship", href:"#register"}, {name:"Users", href:"#register"},
                {name:"Sign up", href:"#register"}, {name:"Terms and Conditions", href:"#register"}, {name:"How it works", href:"#register"},
                {name:"Partnership", href:"#register"}, {name:"Help", href:"#register"}, {name:"Level testimonial", href:"#register"},
                {name:"Contact us", href:"#register"}, {name:"Articles", href:"#register"}, {name:"Our news", href:"#register"},
                {name:"Testimonials", href:"#register"}, {name:"Licenses", href:"#register"}, {name:"Privacy Policy", href:"#register"}, ]

    return (
        <div className={burger ? "menu active" : "menu"} onClick={() => setBurger(false)}>
            <div className="back-grey"></div>
            <div className="menu__content" onClick={(e) => e.stopPropagation()}>
                <div className="menu__header">
                    <img src={Logo} alt="logos" />
                    </div>
                    <ul >
                {items.map((key, idx) =>(
                    <li key={idx}>
                        <a href={key.href} onClick={() => setBurger(false)}>{key.name}</a>
                        </li>
                ))}
                </ul>
            </div>


        </div>
    )
}
export default Menu