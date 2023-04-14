import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            I am mother  element
          <Outlet></Outlet>
           
        </div>
    );
};

export default Home;