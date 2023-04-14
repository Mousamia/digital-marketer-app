import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/friends'>Friends</Link>
            <h2>Thaats Fine</h2>
            <Outlet/>
        </div>
    );
};

export default Header;