import React, { useEffect, useState } from 'react';
import "./Nav.css"

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            handleShow(window.scrollY>110 ? true:false);
        })
        return () => {
            window.removeEventListener("scroll",null)
        }
    },[]);


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
            alt="netflix logo" />

            <img className="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="your profile" />
            
        </div>
    )
}

export default Nav
