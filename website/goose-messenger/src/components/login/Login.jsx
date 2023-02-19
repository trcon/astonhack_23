import React from "react";
import "./login.css"
import {Link} from "react-router-dom"


const Login = () => {
    return(
        <div id="login-form-wrap">
        <h2>Login</h2>
        <form id="login-form">
            <p>
            <input type="text" id="username" name="username" placeholder="Username/Email Address" required></input>
            </p>

            <p>
            <input type="password" id="password" name="password" placeholder="Password" required></input>
            </p>



            <p>
            <Link to="/"><input type="submit" id="login" value="Login"/></Link>
            </p>
        </form>
        <div id="create-account-wrap">
            <p>Not a member? <Link to="/register">Sign Up</Link></p>
        </div>
        </div>
        
  

    )
}

export default Login