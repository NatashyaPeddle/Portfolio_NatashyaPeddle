import React from 'react';
import { Link } from 'react-router-dom';

//STUDENT INFORMATION: Name: Natashya Peddle / StudentID: 301487275 / Date: September 27th 2025 / File Name: Portfolio: Layout.jsx

export default function Layout() {

    return ( //portfolio links
        <div>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | {" "}
                <Link to="/about">About</Link> | {" "}
                <Link to="/projects">Projects</Link> | {" "}
                <Link to="/contact">Contact</Link> | {" "}
                <Link to="/Services">Services</Link>
            </nav>
            <br/>
            <hr />



        </div>
    );
}