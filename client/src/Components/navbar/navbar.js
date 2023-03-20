import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import { CartCheck,PersonCircle,Bell } from "react-bootstrap-icons";

function Navbar()
{


    return (
        <nav className='navbar'>
            <ul className='navbarMenu'>
                <li className='navbarItem' ><Link className='navbarLink' to="/">Home</Link></li>
                <li className='navbarItem' ><Link className='navbarLink' to="/Customize">Customize</Link></li>
                <li className='navbarItem' ><Link className='navbarLink' to="/Sign">Sign</Link></li>
                
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