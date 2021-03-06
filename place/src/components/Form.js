import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';

export default function Form() {
    const [userDetails, setUserDetails] = useState({
        userName: '',
        userEmail: '',
        userDescription: '',
        message: ''
    })

    const formValues = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const register = async(event) => {
        event.preventDefault();

        const body = JSON.stringify({
            userName: userDetails.userName,
            userEmail: userDetails.userEmail,
            userDescription: userDetails.userDescription
        });
        const response = await axios.post("/api/register", body, {
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        setUserDetails({
            ...userDetails,
            message: response.data.message
        })
    }
    return (
        <div className="container">
            <h1 className='title'>Register</h1>
            <form onSubmit={register}>
                <label>Name: </label>
                <input required-type="text" id="userName" name="userName" onChange={formValues}/>
                <br />
                <label>Email: </label>
                <input required-type="email" id="userEmail" name="userEmail" onChange={formValues}/>
                <br />
                <label>Description of Project: </label>
                <input required-type="text" id="userDescription" name="userDescription" onChange={formValues}/>
                <br />
                <button type="submit">Register</button>
                {userDetails.message ? <h1>{userDetails.message}</h1> : null}
            </form>
        </div>
    )
}
