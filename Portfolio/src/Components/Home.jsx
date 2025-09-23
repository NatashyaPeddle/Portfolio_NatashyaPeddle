import React from 'react';
import { Link } from 'react-router-dom';


// Home Component
// test comment
export default function Home() {

    
     return (
    <div>
            <h2>Home</h2>
                <p>Welcome to my portfolio!

                    You can find all information about me, my projects, education, and how to contact me through this site.
                    <br />
                    <hr />
                    <br />
                    My Goal is to become a full game developer and open my own studio to create my own games!
                    
                        <ul>
                            <li>I have already attended Durham College's Game art and I know how to create all types of game graphics, from concept art, asset creation, animation to game level design.</li>
                            <li>I am currently attending Cenntennial's Game Programming to learn all about game development and the coding half of game creation.</li>
                            
                        </ul>
                        
                        
                    <hr />
                    <br />
                    Find out more about me here!

                    <div className="button-container">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/Services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        
                       
                    </div>
                </p>
        </div> 
    );
}
