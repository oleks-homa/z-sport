import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setEmail, setPicturePath, setIsSignedIn } from '../state';


const Header = () => {
    const isTabletOrLarger = useMediaQuery("(min-width:817px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSignedIn = useSelector(state => state.user.isSignedIn);
    const picturePath = useSelector(state => state.user.picturePath);

    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`bg-[#1C1C1C] px-6 py-4 flex ${isTabletOrLarger ? "justify-between" : "justify-center"
                } items-center text-white top-0`}
        >
            {isTabletOrLarger ? (
                <nav className="flex justify-between items-center w-full mx-6 my-2">
                    <Link to="/" className="header-link">
                        Home
                    </Link>
                    <Link 
                        to="/zsport" 
                        className="header-link" 
                    >
                        Products <span className='text-red-600'>Z-sport</span>
                    </Link>
                    <Link 
                        to="/dhz" 
                        className="header-link"
                    >
                        Products <span className='text-green-600'>DHZ</span>
                    </Link>
                    <Link to="/" className="header-link">
                        Service
                    </Link>
                    <Link to="/" className="header-link">
                        About us
                    </Link>
                    <Link to="/about" className="header-link">
                        Contact
                    </Link>
                    <div>
                        {isSignedIn ? (
                            <div className='flex'>
                                <img src={require(`../assets/${picturePath}`)} alt="Picture of user" className='w-10 h-10 rounded-full mr-4' />
                                <button 
                                    className='text-[26px] border border-gray-400 p-1 rounded-md'
                                    onClick={() => {
                                        dispatch(setEmail(''));
                                        dispatch(setPicturePath(''));
                                        dispatch(setIsSignedIn(false));
                                    }}
                                >Log out</button>
                            </div>
                            
                        ) : (
                            <>
                                <Link to="/login" className='mr-2 text-[26px] border border-gray-400 p-1 rounded-md'>Sign in</Link>
                                <Link to="/register" className='text-[26px] border border-gray-400 p-1 rounded-md'>Sign up</Link>
                            </>
                        )}
                    </div>
                </nav>
            ) : (
                <div className='relative ml-auto'>
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 bg-black text-white rounded shadow-lg w-48">
                            <ul className="flex flex-col space-y-2 p-4">
                                <li>
                                    <Link to="/" className="hover:underline" onClick={toggleMenu}>
                                        STRONA GŁÓWNA
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/"
                                        className="hover:underline"
                                        onClick={toggleMenu}
                                    >
                                        DOSTAWA I PŁATNOŚĆ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline" onClick={toggleMenu}>
                                        O NAS
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/contact"
                                        className="hover:underline"
                                        onClick={toggleMenu}
                                    >
                                        KONTAKT
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            )
            }
        </header>
    )
}

export default Header