import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { CartCheck, PersonCircle, Bell } from "react-bootstrap-icons";


function Navbar() {
    const navigate = useNavigate();


    const username = JSON.parse(localStorage.getItem("user"));




    return (
        <nav className='navbar'>
            <ul className='navbarMenu'>
                <li className='navbarItem' ><Link className='navbarLink' to="/">Home</Link></li>
                <li className='navbarItem' >{username && username.role == "manager" ? <Link className='navbarLink' to='/products'>Products</Link> : <Link className='navbarLink' to="/pcbuild">PC Build</Link>} </li>
                <li className='navbarItem' > {username && username.role == "manager" ? <Link className='navbarLink' to='/orders'>Orders</Link> : <Link className='navbarLink' to="/prebuilt">Pre Built PC</Link>} </li>
                <li className='navbarItem' > {username ? <Link className='navbarLink' to='/Login' onClick={() => localStorage.clear()}>Logout</Link> : <Link className="NavbarLink" to='/Login' >Login</Link>}</li>

            </ul>
            <ul className='navbarIcon'>
                <li className='navbarItemIcon'><Link className='navbarLink' to="Cart"><CartCheck></CartCheck></Link></li>
                <li className='navbarItemIcon'><Link className='navbarLink' to="Cart"><Bell></Bell></Link></li>
                <li className='navbarItemIcon'><Link className='navbarLink' to="Account"><PersonCircle></PersonCircle></Link></li>
            </ul>
        </nav>
    );

}

export default Navbar;