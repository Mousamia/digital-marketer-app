import React from 'react';

const Shirt = ({ shirt }) => {
    console.log(shirt);
    const { name, picture, price } = shirt;

    return (
        <div className='p-4 mt-4 flex justify-center'>
            <div className='flex flex-col justify-around gap-3'>
                <img src={picture} width={200} height={200} className='border-4 border-red-800 rounded-lg' alt="" />
                <h3 className="text-2xl "> {name} </h3>
                <h3 className='text-xl text-yellow-700 '> Price: {price} </h3>
                <button className="bg-purple-400 p-4 rounded-lg">
                    Buy Now
                </button>
            </div>

        </div>
    );
};

export default Shirt;