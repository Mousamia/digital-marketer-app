import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';


const Header = () => {

    return (
        <div className='flex justify-around'>
            
            <ActiveLink to='/about'>About</ActiveLink>
            <ActiveLink to='/contact'>Contact</ActiveLink>
            <ActiveLink to='/friends'>Friends</ActiveLink>
            <ActiveLink to='/posts'>Posts</ActiveLink>
           <ActiveLink to='/shirts'>Tshirts</ActiveLink>

            
            <Outlet/>
        </div>
    );
};

export default Header;