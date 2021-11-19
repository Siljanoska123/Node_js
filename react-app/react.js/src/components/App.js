import React from "react";
import {Route,Routes} from "react-router-dom";
// import { Login } from './Login';
import { Singup } from './Singup';
import { Nav } from './Nav';
import { Login } from "./LogIn";




export function App() {



  return (
    <div id='App'>
      <Nav />
      <Routes>
        <Route path="/register" element={<Singup/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>



  

    </div>
  )
}

