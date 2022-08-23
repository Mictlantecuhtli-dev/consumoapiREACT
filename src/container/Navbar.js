import React from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ brand }) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to="/home/Pedrito" className="navbar-brand text-uppercase">{brand}</Link>
            </div>
        </nav>
    )
}

export default Navbar