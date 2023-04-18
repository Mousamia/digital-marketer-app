import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';

const Shirts = () => {
    const shirts = useLoaderData();
    console.log(shirts);
    return (
        <div>
               <div className="grid grid-cols-3 mx-auto mt-4 justify-around">
                {
                    shirts.map(shirt => <Shirt
                    key={shirt._id}
                    shirt={shirt}
                    ></Shirt>)
                }
               </div>
        </div>
    );
};

export default Shirts;