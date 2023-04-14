import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Photos = () => {
    const friendsPhoto = useLoaderData();
    return (
        <div>
            Thes are the Photos
            <div className='grid grid-cols-3'>
               
                {
                    friendsPhoto.slice(0, 10).map( friend => <Friend
                        key={friend.id}
                        friend={friend}
                    ></Friend> )
                }
            </div>
        </div>
    );
};

export default Photos;