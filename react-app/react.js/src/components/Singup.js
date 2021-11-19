import React, { useState } from 'react';
// import {useNavigate} from 'react-router-dom'

import { api } from './../constants/api'



export function Singup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function postUser() {
        const user = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        }
        fetch(`${api.root}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(alert(`User with name ${firstName} is registered`))
            .catch(err => alert(err))
    }




    return (
        <div id="singup">
            <h2>Register</h2>
            {/* <form method='POST' action={`${api.root}/users/register`}> */}
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={e => { setFirstName(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={e => { setLastName(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => { setEmail(e.target.value) }}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => { setPassword(e.target.value) }}
                />
                <br />
                <br />

                <br />
                <br />
                {/* <button onClick={addNewUser} type="submit">Sign up </button> */}

                {/* <button onClick={()=>props.postUser(`${api.root}`)} >Sign up</button> */}
                <button onClick={postUser} type="button" className="btn btn-primary">Sign Up</button>
                <br />




            </form>
            <br />

        </div>


    )

}


