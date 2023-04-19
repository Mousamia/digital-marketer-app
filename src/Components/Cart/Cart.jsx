import React, { useState } from 'react';
import CartDetail from '../CartDetail/CartDetail';

const Cart = ({ cart, removeCartItem }) => {
    console.log(cart);
    let message;
    // if(cart.length> 2){
    //     message = <p>Pagoler ek din</p>
    // }



    return (
        <div>
            <h1 className="text-3xl text-center text-teal-800 font-bold">
                OrderDetail
            </h1>
            {
                    cart.length> 2 ? <span> pagoler ek din</span> : <span> Grihoster dui din</span>

            }

            {message}

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
// CONDITIONAL RENDERING
// 1..IF ELSE
// 2..ERNARY OPERATOR
// 3..OGICAL &&
// 4..lOGICAL  ||

// Conditional CSS
// 1.Use Ternary
// 2.Use template Sting





