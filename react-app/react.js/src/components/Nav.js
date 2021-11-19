import React from 'react';
import { Link } from 'react-router-dom';
import './../assets/css/Nav.css'

export function Nav() {

    return (
        <div className='nav'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Log in</Link>
                </li>
            </ul>
        </div>
    )
}