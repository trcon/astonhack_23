import React from "react";
import {Link} from "react-router-dom"

const Register = () => {
    return(
        <div id="login-form-wrap">
        <h2>Signup</h2>
        <form id="login-form">
            <p>
                <input type="text" id="username" name="username" placeholder="Username" required></input>
            </p>

            <p>
                <input type="password" id="password" name="password" placeholder="Password" required></input>
            </p>
            
            <p>
                <input type="conpassword" id="conpassword" name="conpassword" placeholder="Confirm Password" required></input>
            </p>

            <p>
                <Link to="/login"><input type="submit" id="login" value="SignUp"/></Link>
            </p>

        </form>
        <div id="create-account-wrap">
            <p>Already a member? <Link to="/login">Login</Link></p>
        </div>
    </div>
    )
}

export default Register