import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          

        <Link to="/first">First</Link>
        <Link to="/second">Second</Link>
        <Link to="/about">Second</Link>
        <Link to="/friends">Second</Link>

       
          
        </div>
    );
};

export default Header;