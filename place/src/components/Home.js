import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Home.css'
import $ from 'jquery';
import { Link } from 'react-router-dom'

export default function Home() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get('/api/users');
        setUsers(res.data.users)
    }

    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        var today = new Date();
        var day = today.getMonth();
        var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
        console.log(day)
        //   console.log("Today is : " + daylist[day] + ".");
        if(daylist[day]!="" && daylist[day]!="Sunday"){
        var hour = today.getHours();
        var minute = today.getMinutes();
        var second = today.getSeconds();
            if(hour>="7" && hour<="14"){
            $("#btn1").show();}
            else{$("#btn1").hide()}
        }
    }, [])

    // const message = users.length > 0 ? "All Users" : "No Users Found"

    // const allUsers = users.length > 0 && users.map((user, index) => {
    //     return(
    //         <li key={index}>Name: {user.name} // Email: {user.email}</li>
    //     )
    // })
        return (
            
            <div id='homeBG'>
                <div id="parchment">
                    <div id='contain'>
                        <div className="typewriter">
                            <h1>Know Your Place.</h1>
                            {/* <h1 className="title">{message}</h1>
                            <ul className="users">
                                {allUsers}
                            </ul> */} 
                        </div>
                            <Link to="/place">
                                <img src="https://webfilms-films.s3.amazonaws.com/place/door-1.png" id='btn1'></img>       
                            </Link> 
                    </div>
                    <img className='stroke' src='https://webfilms-films.s3.amazonaws.com/place/stroke.png' alt='stroke'/> 
                </div>
            </div>
    )
}
