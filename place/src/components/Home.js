import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Home.css'

export default function Home() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await axios.get('/api/users');
        setUsers(res.data.users)
    }

    useEffect(() => {
        getUsers();
    }, [])

    const message = users.length > 0 ? "All Users" : "No Users Found"

    const allUsers = users.length > 0 && users.map((user, index) => {
        return(
            <li key={index}>Name: {user.name} // Email: {user.email}</li>
        )
    })
    return (
        <div className="container">
            <h1 className="title">{message}</h1>
            <ul className="users">
                {allUsers}
            </ul>
        </div>
    )
}
