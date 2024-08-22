import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='header'>
            <div className="heading">
                <h1>Habibi Carts</h1>
            </div>
            <nav className="menu">
                <ul className='menu-items'>
                    <Link to="/" className='lik'>Home</Link>
                    <Link to="/cart" className='lik'>Cart</Link>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar