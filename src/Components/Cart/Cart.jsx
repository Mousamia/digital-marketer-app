import React, { useState } from 'react';
import CartDetail from '../CartDetail/CartDetail';

const Cart = ({ cart, removeCartItem }) => {
    // console.log(cart);


    return (
        <div>
            <h1 className="text-3xl text-center text-teal-800 font-bold">
                OrderDetail
            </h1>

            {
                cart.map((cartItem) => <CartDetail
                    key={cartItem._id}
                    cartItem={cartItem}
                    removeCartItem={removeCartItem}
                ></CartDetail>)
            }

            <h3 className="text-xl font-semibold">

            </h3>
        </div>
    );
};

export default Cart;