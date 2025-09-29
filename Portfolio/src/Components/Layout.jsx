import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../LOGO.jpg';

//STUDENT INFORMATION: Name: Natashya Peddle / StudentID: 301487275 / Date: September 27th 2025 / File Name: Portfolio: Layout.jsx

export default function Layout() {

    return ( //portfolio links on bar
        <div>
            <h1>My Portfolio</h1>
            <nav>
                <div style ={{ display: 'flex', alignItems: 'center',  gap: '10px' }}>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/projects">Projects</Link> | {" "}
                <Link to="/contact">Contact</Link> | {" "}
                <Link to="/Services">Services</Link> | {" "}
            
                <img src={logo} alt="logo" width="50" height="50" /> 
                </div>
    
            </nav>
            <br/>
            <hr />



        </div>
    );
}