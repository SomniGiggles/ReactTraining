import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
    return <>
    <h1>JOIN THE CLUB</h1>
    <div className='formDiv'>
        <form className='joinForm'>
            <label for="title">Title: </label>
            <input type='text' id='title' name='title' placeholder='Title'/> <br />
            <label for="fname">First name: </label>
            <input type='text' id='fname' name='fname' placeholder='First Name' /> 
            <label for="lname">Last name: </label>
            <input type='text' id='lname' name='lname' placeholder='Last Name' /> <br />
            <label for="email">Email: </label>
            <input type='text' id='email' name='email' placeholder='name@example.com' /> <br />
            <label for="phone">Phone: </label>
            <input type='text' id='phone' name='phone' placeholder='012345678910' /> <br />
            <label for="dob">Date of Birth: </label>
            <input type='text' id='dob' name='dob' placeholder='DD/MM/YYYY' /> <br />
            <button>
                <NavLink to='/'>Submit</NavLink>
            </button>
        </form>
        </div>
    </>;
};

export default SignUp;