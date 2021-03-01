import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Home.css'
import stroke from '../stroke.png'
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

    // let enableDisable = function(){
    //     let UTC_hours = new Date().getUTCHours() +1;
    //     if (UTC_hours > 0 && UTC_hours < 1){
    //         document.getElementsByTagName("Link").disabled = false;
    //     }
    //     else
    //     {
    //         document.getElementsByTagName("Link").disabled = true;
    //     }
    // };

    // setInterval(enableDisable, 1000*60);
    // enableDisable();
    // window.addEventListener("load", function(){
    //     let newButton = document.getElementsByTagName("Link");
    //     newButton.style.visibility = new Date().getHours() > 23 ? 'none' : '';
    // });

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
            if(hour>="10" && hour<="14"){
            $("#btn1").show();}
            else{$("#btn1").hide()}
        }
    }, [])



    const message = users.length > 0 ? "All Users" : "No Users Found"

    const allUsers = users.length > 0 && users.map((user, index) => {
        return(
            <li key={index}>Name: {user.name} // Email: {user.email}</li>
        )
    })
    // return (
    //     <main>
    //         <div id="parchment">
    //             <div className="typewriter">
    //                 {/* <span id="parchment"></span> */}
    //                 <h1>Know Your Place.</h1>
    //                 {/* <h1 className="title">{message}</h1>
    //                 <ul className="users">
    //                     {allUsers}
    //                 </ul> */}
    //             </div>
    //         </div>
    //     </main>
        
    // )
        return (
            
        <main>
            <div id="parchment">
                <div id='contain'>
                    <div className="typewriter">
                        {/* <span id="parchment"></span> */}
                        <h1>Know Your Place.</h1>
                        {/* <h1 className="title">{message}</h1>
                        <ul className="users">
                            {allUsers}
                        </ul> */}
                        
                    </div>
                     <Link to="/register">
                        <button type="button" id='btn1'>Basic</button>
                    </Link>
                        
                </div>
                <img className='stroke' src={stroke} alt='stroke'/> 
            </div>
           
        </main>
        
    )
}
