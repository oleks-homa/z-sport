import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';

import { useMediaQuery } from "@mui/material";

const Header = () => {
    const isTabletOrLarger = useMediaQuery("(min-width:817px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`bg-black px-6 py-4 flex ${isTabletOrLarger ? "justify-between" : "justify-center"
                } items-center text-white sticky top-0`}
        >

            <div className="flex items-center space-x-2">
                <img 
                    src={logo}
                    alt="Logo"
                    className="h-[60px] w-[130px]"
                    onClick={() => navigate('/')}
                />
            </div>

            {isTabletOrLarger ? (
                <nav className="flex space-x-6">
                    <Link to="/" className="hover:underline text-base md:text-sm lg:text-base">
                        STRONA GŁÓWNA
                    </Link>
                    <Link to="/" className="hover:underline text-base md:text-sm lg:text-base">
                        DOSTAWA I PŁATNOŚĆ
                    </Link>
                    <Link to="/about" className="hover:underline text-base md:text-sm lg:text-base">
                        O NAS
                    </Link>
                    <Link to="/contact" className="hover:underline text-base md:text-sm lg:text-base">
                        KONTAKT
                    </Link>
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