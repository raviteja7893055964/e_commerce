

import React from 'react'
import { useCart } from './stores/Context/Cardcontext';

export const UserCart = () => {
    const { cartItems, addToCart } = useCart();
    return (
        <>
            <div>
                {cartItems.map(item => {
                    return (
                        <>
                            <div className="cart-section">
                                <div className="cart-img">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="cart-details">
                                    <h3>
                                        {item.product}
                                    </h3>
                                    <h2>
                                        {item.price}
                                    </h2>
                                    <h3>
                                        {item.model}
                                    </h3>
                                </div>
                            </div>
                        </>

                    )
                })}
            </div>
        </>

    )
}
