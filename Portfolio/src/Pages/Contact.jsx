import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Contact() {

        //redirect user
        const sendHome = useNavigate(); //from router library

        //Save form info
        const [form, setFormData] = useState({
                //default state is set to blank - form = name of const - set formdate = function to update state of "form" - all values are strings
                fullname: "",
                number: "",
                email: "",
                message: ""
        });

        //
        const change = (e) => { //event handler function / runs when user types in form input - E = "Event" / Arrow function 
                const { name, value } = e.target; //gets name/value of input that "changed"/triggered event when user typed input
                setFormData((prevData) => ({ //updates  data in "form" const state as it was previously blank
                        ...prevData,
                        [name]: value
                }));
        }

        //submit form
        const submit = (e) => {    //event handler when user hits "send" - E = "Event" / Arrow function 
                e.preventDefault(); //stops page refresh
                console.log("Form submitted:", form); //logs it to console

                //redirect to home page
                sendHome ('/');
        }

     return ( //all the inputs and submit button
        <div>
                <h2>Contact Me</h2>
                <h3>Send Message</h3>
                
                        <form onSubmit={submit}>
                        <hr></hr>
                        Full Name:   {""} <br></br>
                        <input type="text" name="fullname" value={form.fullname} onChange={change} /> <br /><br />
                        
                        Contact Number:   {""} <br></br>
                        <input type="text" name="number" value={form.number} onChange={change}/> <br /><br />
                        
                        Email:   {""} <br></br>
                        <input type="text" name="email" value={form.email} onChange={change}/> <br /><br />
                        
                        Message:   {""} <br></br>
                        <input type="text" name="message" value={form.message} onChange={change}/> <br /><br />
                        <hr></hr>

                        <button type="submit">Send Contact Message</button>
                        </form>

                        
                
        </div>
     );
}