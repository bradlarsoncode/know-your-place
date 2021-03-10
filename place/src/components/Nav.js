import React from 'react'
import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <nav>

            <ul>
                <li>
                    <Link to="/pieces">Pieces</Link>
                </li>
                <li>
                    <Link to="/place">Video Chat</Link>
                </li>
            </ul>
        </nav>
    )
}
