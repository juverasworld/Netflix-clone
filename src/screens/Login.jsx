import "./Homescreen.css";
import { useState } from "react";
import SignUp from "./SignUp";
const Login = () => {
    const [signIn, setSignIn]=useState(false)
    return (
        <>
            <section className="LoginScreen">
                <div className="Login__background">
                    <img
                        className="login_logo"
                        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                    <button className="login_button" onClick={()=>setSignIn(true)}>Sign In</button>
                    <div className="login__gradient" />
                </div>
                <div className="login__body">
                    
                    {signIn ? (
<SignUp/>
                    ):(

                    <>
                        <h1>Unlimited files, TV programmes and more</h1>
                        <h2>Watch anywhere. Cancel at any time</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        <div className="login__inputDetails">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button className="login__getStarted" onClick={()=>setSignIn(true)}>
                                    GET STARTED
                                </button>
                            </form>
                        </div>
                    </>
                    )}
                </div>
            </section>
        </>
    );
}

export default Login;