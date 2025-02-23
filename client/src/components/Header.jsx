import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLang } from '../state';
import { logOut } from '../actions/auth';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import britishIcon from '../assets/united-kingdom-flag-icon.svg';
import polishIcon from '../assets/poland-flag-icon.svg';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState({});

    const isSignedIn = useSelector(state => state.user.isSignedIn);
    const currentLang = useSelector(state => state.language.currentLang);
    const name = useSelector(state => state.user.fullName);
    const categories = useSelector(state => state.category.allCategories);
    const lang = useSelector(state => state.language.currentLang);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCategory = (id) => {
        setExpandedCategories((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className=''>
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
                className={`bg-[#1C1C1C] px-6 py-3 flex justify-center lg:justify-between items-center text-white`}
            >
                <img src="/images/logo.png" alt="" className='w-48 h-20 hidden lg:block' />
                <nav className="hidden lg:flex flex-row justify-end items-center w-full gap-x-3 xl:gap-x-8">
                    
                    <Link to="/" className="header-link ml-7">
                        {currentLang === 'pl' ? 'Strona główna' : 'Home'}
                    </Link>
                    <Link
                        to="/products"
                        className="header-link"
                    >
                        {currentLang === 'pl' ? 'Sprzęt sportowy' : 'Sport equipment'}
                    </Link>
                    <Link
                        to="/"
                        className='header-link'
                    >
                        {currentLang === 'pl' ? 'Aksesoria domowa' : 'Home accessories'}
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

                    {/* <LocalGroceryStoreIcon
                        className='text-gray-400 cursor-pointer hover:text-red-500 transition-all duration-200'
                    /> */}

                    {/* <div>
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
                    </div> */}
                </nav>

                <div className='flex justify-between w-full items-center lg:hidden relative'>
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="text-white focus:outline-none"
                    >
                        <MenuIcon fontSize='large' />
                    </button>

                    <div
                        className={`overflow-y-auto fixed z-40 top-0 left-0 h-full w-3/4 md:w-1/2 bg-gray-200 shadow-lg p-5 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                            }`}
                    >
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className={`${isMenuOpen ? '' : 'hidden'} z-40 absolute top-2 right-8 text-gray-700 w-12 h-12`}
                        >
                            <CloseIcon fontSize='large' />
                        </button>

                        <nav className="mt-0">
                            <ul className="flex flex-col space-y-2">
                                <li>
                                    <Link to="/" className="hover:underline text-black text-xl" onClick={() => setIsMenuOpen(false)}>
                                        {currentLang === 'pl' ? 'Strona główna' : 'Home'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="hover:underline text-black text-xl" onClick={() => setIsMenuOpen(false)}>
                                        {currentLang === 'pl' ? 'Produkty' : 'Products'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline text-black text-xl" onClick={() => setIsMenuOpen(false)}>
                                        {currentLang === 'pl' ? 'O nas' : 'About us'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline text-black text-xl" onClick={() => setIsMenuOpen(false)}>
                                        {currentLang === 'pl' ? 'Kontakt' : 'Contact'}
                                    </Link>
                                </li>
                                {/* {isSignedIn ? (
                                    <li>
                                        <button
                                            className='bg-red-600 text-white font-semibold px-4 py-2 rounded-md transition hover:bg-red-700 w-full text-left'
                                            onClick={() => {
                                                dispatch(logOut());
                                                setIsMenuOpen(false);
                                            }}
                                        >{currentLang === 'pl' ? 'Wyloguj się' : 'Log out'}</button>
                                    </li>
                                ) : (
                                    <>
                                        <li onClick={() => setIsMenuOpen(false)}>
                                            <Link to="/login" className='bg-blue-600 text-white font-semibold px-4 block py-2 rounded-md text-center'>
                                                {currentLang === 'pl' ? 'Zaloguj się' : 'Sign in'}
                                            </Link>
                                        </li>
                                        <li onClick={() => setIsMenuOpen(false)}>
                                            <Link to="/register" className='bg-green-600 text-white font-semibold px-4 block py-2 rounded-md text-center'>
                                                {currentLang === 'pl' ? 'Zarejestruj się' : 'Sign up'}
                                            </Link>
                                        </li>
                                    </>
                                )} */}
                                <li className='border-b border-gray-600 border-dashed'></li>
                                {categories.map((category) => (
                                    <div key={category.id} className="text-black text-xl">
                                        <div className="flex justify-between items-center">
                                            <span 
                                                onClick={() => {
                                                    navigate(`/products/${category.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                                                    setIsMenuOpen(false);
                                                }}
                                                >{lang === 'pl' ? category.namePL : category.nameEN}</span>
                                            <button onClick={() => toggleCategory(category.id)} className="text-xl">
                                                {expandedCategories[category.id] ? '−' : '+'}
                                            </button>
                                        </div>
                                        {expandedCategories[category.id] && (
                                            <div className="p-2 text-gray-800">
                                                {category.subCategories.map((sub) => (
                                                    <div key={sub.id} className="pl-4 py-2 flex items-center">
                                                        <span 
                                                            onClick={() => {
                                                                navigate(`/products/${category.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}/${sub.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                                                                setIsMenuOpen(false);
                                                            }}
                                                        >{lang === 'pl' ? sub.namePL : sub.nameEN}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {isMenuOpen && (
                        <div
                            className="fixed inset-0 bg-black opacity-50"
                            onClick={() => setIsMenuOpen(false)}
                        ></div>
                    )}


                    <Link to='/' className=''>
                        <img src="/images/logo.png" alt="Z-sport" className='h-16 md:h-20 w-28 md:w-32'/>
                    </Link>

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
                    <ul className={`absolute mt-10 right-0 top-3 w-[92px] bg-gray-800 shadow-lg rounded-lg border border-gray-700 transition-all duration-300 ${isLangOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
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
                </div>
            </header >
        </div >
    )
}

export default Header