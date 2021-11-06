import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import {signIn} from "./firebase";


function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img 
                    src="img/Slack_Mark_Web.png"
                    alt=""
                />
            <h1>Sign in to Fake Slack</h1>
            <p>yoon.slack.com</p>
            <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
