import React, { useState,useEffect } from 'react';
import { api } from './../constants/api';
import {Input} from './Input';

export function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputType,setInputType] = useState('password');

    useEffect(()=>{
        console.log("Email: ",email);
        console.log("Password: ",password);
    },[email,password])

    function toggleInput(){
        setInputType(
            inputType === 'password' ? 'text' : 'password'
        )
    }

    function handleSubmit(event){
        event.preventDefault();
        alert(`Email: ${email}\nPassword: ${password}`)
    }

    function postLogIn() {
        const user = {
            email: email,
            password: password
        }
        fetch(`${api.root}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json().then(result => alert('Loged in')
                
                
                // (`Loged in. Token: ` + result.token)
                ))
            .catch(err => alert(err))
    }

    return (
        <div id="login">
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Enter your email account"
                    name="email"
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                />
                <Input
                    type={inputType}
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                    togglePassword={toggleInput}
                />
                <button className="action-button" onClick={postLogIn} type="button">
                    Sign In
                </button>
            </form>
        </div>
    )
}