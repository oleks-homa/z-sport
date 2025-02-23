import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { categoriesZSPORT } from '../data';
import { useNavigate } from 'react-router-dom';
import { setCurrentCategory } from '../state';

const ImageSlider = () => {
    const lang = useSelector(state => state.language.currentLang);
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % categoriesZSPORT.length)
    }

    const prevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + categoriesZSPORT.length) % categoriesZSPORT.length)
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <>
            <div className='hidden lg:flex items-center justify-center w-full mx-auto gap-4'>
                <button className='z-50 mr-6 w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-900/80 transition-all duration-200' onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className='relative flex items-center justify-center min-w-[650px] h-[400px]'>
                    {categoriesZSPORT.map((category, index) => {
                        const position =
                            index === currentSlide
                                ? 'center'
                                : index === (currentSlide + 1) % categoriesZSPORT.length
                                    ? 'right'
                                    : index === (currentSlide - 1 + categoriesZSPORT.length) % categoriesZSPORT.length
                                        ? 'left'
                                        : 'hidden';

                        return (
                            <motion.div
                                key={index}
                                className={`absolute transition-transform duration-500 
										${position === 'center' ? 'z-20 scale-100' : 'z-10 scale-75 opacity-60'} 
										${position === 'left' ? '-translate-x-60' : ''} ${position === 'right' ? 'translate-x-60' : ''}
									`}
                                onClick={() => {
                                    navigate(`/products/${category.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                                    dispatch(setCurrentCategory(category));
                                }}
                            >
                                <img
                                    src={category.picturePath}
                                    alt={category.namePL}
                                    className='w-64 h-96 rounded-lg shadow-lg'
                                />
                                {position === 'center' && (
                                    <p className='mt-4 flex justify-center items-center text-lg font-robotoSlab font-semibold text-white bg-red-600 rounded-lg h-10 shadow-red-700'>
                                        {lang === 'pl' ? category.namePL : category.nameEN}
                                    </p>
                                )}
                            </motion.div>
                        )
                    })}
                </div>
                <button className='z-50 ml-6 w-14 h-14 flex items-center justify-center bg-gray-800 rounded-full shadow-lg hover:bg-gray-900/80 transition-all duration-200' onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className='flex flex-col items-center space-y-6 my-5 lg:hidden font-robotoSlab z-40'>
                <div
                    className="flex flex-col items-center"
                    onClick={() => {
                        navigate(`/products/${categoriesZSPORT[0].namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                        dispatch(setCurrentCategory(categoriesZSPORT[0]));
                    }}
                >
                    <img src="/images/_ps.jpg" alt="Profesjonalny sprzęt" className="w-3/4 rounded-lg" />
                    <p className="mt-2 text-center text-white font-semibold">
                        {lang === 'pl' ? 'Profesjonalny sprzęt' : 'Professional equipment'}
                    </p>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => {
                        navigate(`/products/${categoriesZSPORT[3].namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                        dispatch(setCurrentCategory(categoriesZSPORT[3]));
                    }}
                >
                    <img src="/images/_rs.jpg" alt="Rehabilitacyjny sprzęt" className="w-3/4 rounded-lg" />
                    <p className="mt-2 text-center text-white font-semibold">
                        {lang === 'pl' ? 'Rehabilitacyjny sprzęt' : 'Rehabilitation equipment'}
                    </p>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => {
                        navigate(`/products/${categoriesZSPORT[2].namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                        dispatch(setCurrentCategory(categoriesZSPORT[2]));
                    }}
                >
                    <img src="/images/_sz.jpg" alt="Siłownia zewnętrzna" className="w-3/4 rounded-lg" />
                    <p className="mt-2 text-center text-white font-semibold">
                        {lang === 'pl' ? 'Siłownia zewnętrzna' : 'Outdoor gym'}
                    </p>
                </div>
                <div
                    className="flex flex-col items-center"
                    onClick={() => {
                        navigate(`/products/${categoriesZSPORT[1].namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
                        dispatch(setCurrentCategory(categoriesZSPORT[1]));
                    }}
                >
                    <img src="/images/_sd.jpg" alt="Siłownia domowa" className="w-3/4 rounded-lg" />
                    <p className="mt-2 text-center text-white font-semibold">
                        {lang === 'pl' ? 'Siłownia domowa' : 'Indoor gym'}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ImageSlider