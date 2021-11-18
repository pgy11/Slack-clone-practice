import { Button } from '@material-ui/core';
import React from 'react'
import './Login.css';
import { signInWithPopup} from "firebase/auth";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { provider, auth } from './firebase';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
                cookie: result.user
            })
        })
        .catch(error => alert(error));        
    }
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