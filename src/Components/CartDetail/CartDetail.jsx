import React from 'react';

const CartDetail = ({ cartItem, removeCartItem }) => {
    // console.log(cartItem);
    // console.log(removeCartItem);
    const { name, price,_id } = cartItem;
    return (
        <div className='text-center p-3'>
            <h3 className="text-3xl">{name}</h3>
            <h3 className="text-2xl inline-block">Price: {price} </h3>
            <span onClick={()=> removeCartItem(_id)} className='text-red-950'>X</span>



        </div>
    );
};

export default CartDetail;