import "./Nav.css"
import {useState, useEffect} from "react"
const Navbar = () => {
    const [show, handleShow]= useState(false);

    const transitionNavbar = ()=>{
        if(window.scrollY>100){
    handleShow(true)
}
else{

    handleShow(false)  
}
   };

   useEffect(()=>{
    window.addEventListener("scroll", transitionNavbar)
    return()=>window.removeEventListener("scroll",transitionNavbar)
   },[])
   


    return (
    
        <div className={`nav ${show &&  "nav__black"} `}>
            <div className="nav__contents">
            <img
                    className="nav__logo"
                    src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
                    alt="image logo"
                />
                <img
                    className="nav__avatar"
                    src="data:image/png;base64,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"

                    alt="avatar-image" />
              
            </div>
        </div>
    );
}

export default Navbar;