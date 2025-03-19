import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [quantity, setQuantity] = useState(0);

    const quantity_slice = useSelector((state) => state.cart.items);

    useEffect(() => {
        const totalQuantity = quantity_slice.reduce((total, item) => total + item.quantity, 0);
        setQuantity(totalQuantity);
    }, [quantity_slice]);

    return (
        <>
            <nav>
                <Link to={'/'}>
                    <div className='logo'>
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Logo" />
                        <div>
                            <h1>Paradise Nursery</h1>
                            <i>Where Green Meets Serenity</i>
                        </div>
                    </div>
                </Link>
                <Link to={'/shopping'}>
                    <div>
                        <h1>Plants</h1>
                    </div>
                </Link>
                <Link to={'/cart'}>
                    <div className='cart'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="IconChangeColor" height="60" width="60">
                            <rect width="156" height="156" fill="none"></rect>
                            <circle cx="80" cy="216" r="12"></circle>
                            <circle cx="184" cy="216" r="12"></circle>
                            <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" id="mainIconPathAttribute"></path>
                        </svg>
                        <div className='cartItem'>
                            <p>{quantity}</p>
                        </div>
                    </div>
                </Link>
            </nav>
        </>
    );
}

export default Navbar;
