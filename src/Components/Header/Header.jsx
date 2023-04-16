import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {

    return (
        <div>
            
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to='/posts'>Posts</ActiveLink>
            <h2>Thaats Fine</h2>
            <Outlet/>
        </div>
    );
};

export default Header;