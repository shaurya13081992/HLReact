import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
    const navstyle = {
        color: 'white'
    };
  return (
    <nav>
        <ul className="nav-links">
            <Link to='/approved' style={navstyle}><li>Approved</li></Link>
            <Link to='/pending' style={navstyle}><li>Pending</li></Link>
            <Link to='/cancel' style={navstyle}><li>Cancelled</li></Link>
        </ul>
    </nav>
  );
}

export default Nav;
