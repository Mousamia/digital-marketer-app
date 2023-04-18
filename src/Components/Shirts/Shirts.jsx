import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import Cart from '../Cart/Cart';

const Shirts = () => {
    const shirts = useLoaderData();
    const [cart, setCart] = useState([]);


    const handleAddToCart = (shirt) => {
        const newCart = [...cart, shirt];
        setCart(newCart);
        console.log(newCart);
    }

    const removeCartItem = (id) => {
        // console.log(id);
        
        const remainning = cart.filter(ts => ts._id !== id);
        setCart(remainning);
        console.log(remainning);
    }
  
    return (
        <div>
            <div className="grid grid-cols-3 mx-auto mt-4 justify-around">
                {
                    shirts.map(shirt => <Shirt
                        key={shirt._id}
                        shirt={shirt}
                        handleAddToCart={handleAddToCart}
                    ></Shirt>)
                }

                <h3 className="text-3xl">
                    <Cart
                        cart={cart}
                        removeCartItem = {removeCartItem}
                    ></Cart>
                </h3>
            </div>

        </div>
    );
};

export default Shirts;