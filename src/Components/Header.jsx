import React from "react";
import { Link } from "react-router-dom";   // import Link
import UserLogin from "../UserServices/UserLogin";

function Header() {
    return (
        <div>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        </div>
    );
}

export default Header;
