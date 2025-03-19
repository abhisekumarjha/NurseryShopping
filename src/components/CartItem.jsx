import React, { useState } from 'react'
import './CartItem.css'
import Navbar from './Navbar'
import { Link } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from '../CartSlice'

const CartItem = () => {

    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const totalAmt = cartItems.reduce((total, item) => total + (parseFloat(item.cost.slice(1)) * item.quantity), 0);

    const [showCheckout, setShowCheckout] = useState(false);

    function handleCheckout() {
        setShowCheckout(true)
    }

    const handleIncrease = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeItem(item.name));
        }
    };

    return (
        <div className='cartItem-container'>
            <Navbar />
            <div className='cart-details'>
                <div>
                    <h1>Total Cart Amount: ${totalAmt.toFixed(2)}</h1>
                </div>
                <Link to={'/shopping'}>
                    <div>
                        <button type="button" className='cartItem-btn'>Continue Shopping</button>
                    </div>
                </Link>

                <div className='checkout-table'>
                    {!showCheckout ?
                        <button
                            type="button" className='cartItem-btn'
                            onClick={handleCheckout}
                        >Checkout</button>
                        :
                        <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Quantity</th>
                                        <th>Unit Price</th>
                                        <th>Total Amt. ($)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.length === 0 ? (
                                        <tr>
                                            <td colSpan="4" style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '2rem' }}><b>Your cart is empty</b></td>
                                        </tr>
                                    ) : (
                                        cartItems.map((item) => (
                                            <tr key={item.name}>
                                                <td>{item.name}</td>
                                                <td className='quantity'>
                                                    <button className="cart-btn" onClick={() => handleDecrease(item)}>−</button>
                                                    <span className="cart-quantity">{item.quantity}</span>
                                                    <button className="cart-btn" onClick={() => handleIncrease(item)}>+</button>
                                                </td>
                                                <td>{`$${parseFloat(item.cost.slice(1)).toFixed(2)}`}</td>
                                                <td>{`$${(parseFloat(item.cost.slice(1)) * item.quantity).toFixed(2)}`}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>

        </div>

    )
}

export default CartItem