import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLang } from '../state';
import { logOut } from '../actions/auth';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import britishIcon from '../assets/united-kingdom-flag-icon.svg';
import polishIcon from '../assets/poland-flag-icon.svg';


const Header = () => {
    const isTabletOrLarger = useMediaQuery("(min-width:817px)");
    const mediumDevice = useMediaQuery("(max-width:1023px)");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const isSignedIn = useSelector(state => state.user.isSignedIn);
    const picturePath = useSelector(state => state.user.picturePath);
    const currentLang = useSelector(state => state.language.currentLang);
    const name = useSelector(state => state.user.fullName)

    const dispatch = useDispatch();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className='hidden md:flex items-center w-full h-10 bg-black text-white text-sm lg:text-base pl-4 space-x-4 md:space-x-10'>
                <div className='flex items-center'>
                    <PhoneIphoneOutlinedIcon className='mr-2' />
                    <span className='inline'>+48 576 231 531</span>
                </div>
                <div className='flex items-center'>
                    <MailOutlineOutlinedIcon className='mr-2' />
                    <span className='inline'>zsportq@gmail.com</span>
                </div>
                <div className='flex items-center'>
                    <QueryBuilderOutlinedIcon className='mr-2' />
                    <span className='inline'>Pon. - Pt: 06:30 - 22:00 • Sob. - Niedz.: 09:00 - 22:00</span>
                </div>
            </div>
            <header
                className={`bg-[#1C1C1C] px-4 py-3 flex justify-center lg:justify-between items-center text-white top-0`}
            >
                <nav className="hidden lg:flex justify-between items-center w-full">
                    <Link to="/" className="header-link ml-7">
                        {currentLang === 'pl' ? 'Strona główna' : 'Home'}
                    </Link>
                    <Link
                        to="/products"
                        className="header-link"
                    >
                        {currentLang === 'pl' ? 'Sprzęt sportowy' : 'Sport equipment'}
                    </Link>
                    <Link to="/" className="header-link">
                        {currentLang === 'pl' ? 'Obsługa klienta' : 'Customer service'}
                    </Link>
                    <Link to="/about" className="header-link">
                        {currentLang === 'pl' ? 'O nas' : 'About us'}
                    </Link>
                    <Link to="/contact" className="header-link">
                        {currentLang === 'pl' ? 'Kontakt' : 'Contact'}
                    </Link>


                    <div className='relative'>
                        <div
                            className='flex items-center gap-2 cursor-pointer bg-gray-800 px-3 py-2 rounded-lg border border-gray-800 hover:bg-gray-400 transition'
                            onClick={() => setIsLangOpen(!isLangOpen)}
                        >
                            <img
                                src={currentLang === 'pl' ? polishIcon : britishIcon}
                                alt={currentLang === 'pl' ? "Polski" : "English"}
                                className="w-6 h-4"
                            />
                            <KeyboardArrowDownIcon className='text-gray-400' />
                        </div>
                        <ul className={`absolute mt-2 right-0 w-[92px] bg-gray-800 shadow-lg rounded-lg border border-gray-700 transition-all duration-300 ${isLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                            <li onClick={() => {
                                dispatch(setCurrentLang('en'));
                                setIsLangOpen(!isLangOpen);
                            }}
                                className='flex items-center gap-2 px-1 py-2 hover:bg-gray-600 rounded-lg cursor-pointer transition'
                            >
                                <img src={britishIcon} alt="English" className='w-6 h-4' />
                                <span className="hidden sm:inline">English</span>
                            </li>
                            <li onClick={() => {
                                dispatch(setCurrentLang('pl'));
                                setIsLangOpen(!isLangOpen);
                            }}
                                className='flex items-center gap-2 px-1 py-2 hover:bg-gray-600 rounded-lg cursor-pointer transition'
                            >
                                <img src={polishIcon} alt="Polski" className='w-6 h-4' />
                                <span className="hidden sm:inline">Polski</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        {isSignedIn ? (
                            <div className='flex items-center'>
                                <div className='flex items-center justify-center bg-purple-500 rounded-full w-10 h-10 mr-4 cursor-pointer'>{name[0]?.toUpperCase()}</div>
                                <button
                                    className='login-btn mr-6'
                                    onClick={() => {
                                        dispatch(logOut())
                                    }}
                                >{currentLang == 'pl' ? 'Wyloguj się' : 'Log out'}</button>
                            </div>

                        ) : (
                            <div className='flex gap-4'>
                                <Link to="/login" className='login-btn'>{currentLang === 'pl' ? 'Zaloguj się' : 'Sign in'}</Link>
                                <Link to="/register" className='login-btn mr-6'>{currentLang === 'pl' ? 'Zarejestruj się' : 'Sign up'}</Link>
                            </div>
                        )}
                    </div>
                </nav>

                <div className='grid grid-cols-2 gap-4 lg:hidden relative'>
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

                    <div
                        className='flex items-center gap-2 cursor-pointer bg-gray-800 px-3 py-2 rounded-lg border border-gray-800 hover:bg-gray-400 transition'
                        onClick={() => setIsLangOpen(!isLangOpen)}
                    >
                        <img
                            src={currentLang === 'pl' ? polishIcon : britishIcon}
                            alt={currentLang === 'pl' ? "Polski" : "English"}
                            className="w-6 h-4"
                        />
                        <KeyboardArrowDownIcon className='text-gray-400' />
                    </div>
                    <ul className={`absolute mt-10 right-0 w-[92px] bg-gray-800 shadow-lg rounded-lg border border-gray-700 transition-all duration-300 ${isLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <li onClick={() => {
                            dispatch(setCurrentLang('en'));
                            setIsLangOpen(!isLangOpen);
                        }}
                            className='flex items-center gap-2 px-1 py-2 hover:bg-gray-600 rounded-lg cursor-pointer transition'
                        >
                            <img src={britishIcon} alt="English" className='w-6 h-4' />
                            <span className="inline">English</span>
                        </li>
                        <li onClick={() => {
                            dispatch(setCurrentLang('pl'));
                            setIsLangOpen(!isLangOpen);
                        }}
                            className='flex items-center gap-2 px-1 py-2 hover:bg-gray-600 rounded-lg cursor-pointer transition'
                        >
                            <img src={polishIcon} alt="Polski" className='w-6 h-4' />
                            <span className="inline">Polski</span>
                        </li>
                    </ul>

                    {isMenuOpen && (
                        <div className="absolute right-0 mt-12 bg-black text-white rounded shadow-lg w-48 z-50">
                            <ul className="flex flex-col space-y-2 p-4">
                                <li>
                                    <Link to="/" className="hover:underline" onClick={toggleMenu}>
                                        {currentLang === 'pl' ? 'Strona główna' : 'Home'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/zsport" className="hover:underline" onClick={toggleMenu}>
                                        {currentLang === 'pl' ? 'Produkty' : 'Products'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline" onClick={toggleMenu}>
                                        {currentLang === 'pl' ? 'O nas' : 'About us'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline" onClick={toggleMenu}>
                                        {currentLang === 'pl' ? 'Kontakt' : 'Contact'}
                                    </Link>
                                </li>
                                {isSignedIn ? (
                                    <li>
                                        <button
                                            className='bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition hover:bg-red-700 w-full text-left'
                                            onClick={() => {
                                                dispatch(logOut());
                                                toggleMenu();
                                            }}
                                        >{currentLang === 'pl' ? 'Wyloguj się' : 'Log out'}</button>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/login" className='bg-blue-600 text-white font-semibold px-4 block py-2 rounded-md text-center'>
                                                {currentLang === 'pl' ? 'Zaloguj się' : 'Sign in'}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/register" className='bg-green-600 text-white font-semibold px-4 block py-2 rounded-md text-center'>
                                                {currentLang === 'pl' ? 'Zarejestruj się' : 'Sign up'}
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header