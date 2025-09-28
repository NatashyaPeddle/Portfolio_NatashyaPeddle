import React from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../20250906_151119.jpg';
import resumePDF from '../NATASHYAPEDDLE_2025_PDF.pdf';

//STUDENT INFORMATION: Name: Natashya Peddle / StudentID: 301487275 / Date: September 27th 2025 / File Name: Portfolio: About.jsx

export default function About() {
     return ( //text block + selfie + resume link
        <div>
                <h2>About Me</h2>
                <p>My name is Natashya Peddle!
                        <br />
                        <br />
                I am 22 years old and a student at Centennial College. I have been studying game development for a total of 4 years, three years of Game Art at Durham College and I am now on my second year of Game Programming at Centennial College.
                </p>
                <img src={profileImage} alt="Natashya Peddle" width="300" height="400"/>

                <br />
                <hr />
                
                <h2>Resume</h2>
                <p>
                        <a href={resumePDF}>Resume PDF</a>
                </p>
        </div>
     );

}