import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    // console.log(friend);
    const { name, email, id ,phone } = friend;
    return (
        <div className='border-4 border-purple-700 m-4 p-3'>
            <h2 className='text-3xl font-bold'> {name} {id} </h2>
            <h3 className='text-xl font-thin'> {email}</h3>
            <h3> {phone} </h3>
            <button>
                <Link to={`/friend/${id}`}>
                    Show me deatils</Link>
                
            </button>
        </div>
    );
};

export default Friend;