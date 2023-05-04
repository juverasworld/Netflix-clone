import React, { useRef } from "react";
import { auth } from "../firebase"
import "./Homescreen.css"
const SignUp = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((authUser) => { console.log(authUser) })
            .catch((error) => {
                alert(error.message)
            });
    };
    const SignIn = (e) => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        )
            .then((authUser) => { console.log(authUser) })
            .catch((error) => {
                alert(error.message)
            });
    }
    return (
        <div className="SignUp">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="email" />
                <input ref={passwordRef} placeholder="Password" type="password" />
                <button type="submit" onClick={SignIn}> Sign In</button>
                <h4> <span className="signUp_Link">New to Netflix?  </span>
                    <span className="signUp_gray" onClick={register}> Sign Up Now</span>
                </h4>
            </form>
        </div>
    );
}

export default SignUp;