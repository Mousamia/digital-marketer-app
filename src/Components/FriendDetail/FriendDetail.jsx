import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const firend = useLoaderData();
    // console.log(firend);
    return (
        <div>
            <h2 className='text-3xl text-red-600'>Chaddda shaber chaddi</h2>
            {/* <h2>Name:{firend} </h2>
            <h2>Name: {firend.address} </h2>
            <h2>Name: {firend.email} </h2> */}

            <h3>Name: {firend.name} </h3>
            <h3>mail: {firend.email} </h3>
        </div>
    );
};

export default FriendDetail;