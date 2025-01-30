import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import { data, products, companies, swiperLinks } from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentProduct, setCurrentSubcategory } from '../state';
import { isImmutableDefault } from '@reduxjs/toolkit';

const Home = () => {
  //Media queries
  const isMediumDevice = useMediaQuery("(min-width:817px) and (max-width:1023px)");
  const isTabletOrLarger = useMediaQuery("(min-width:1024px)");
  const isPhoneOrSmaller = useMediaQuery("(max-width:816px)");

  //Getting url params
  const { categoryIdParam, subcategoryParam, productName } = useParams();






  let currentProductsList = [];
  if (subcategoryParam) {
    products.forEach((product) => {
      if (product.subCategory == subcategoryParam) {
        currentProductsList.push(product);
      }
    })
  }

  const productRef = useRef(null);

  return (
    <>
      <Header />
      <div className="flex flex-col justify-end items-center w-full h-screen px-4 bg-cover bg-center bg-[url('/src/assets/bg_main.JPG')]">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 items-center justify-center mb-20 relative">
          {[...Array(isPhoneOrSmaller ? 0 : isTabletOrLarger ? 8 : isMediumDevice ? 6 : 4)].map((_, index) => (
            <div key={index} className='flex justify-center items-center'>
              <img
                src={require('../assets/nature.jpg')}
                alt={`Product ${index + 1}`}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
        <div className='absolute bottom-0 flex justify-center w-full'>
          <div className="flex flex-1 justify-end">
            {isPhoneOrSmaller && (
              <img
                src={require('../assets/nature.jpg')}
                alt="Product 1"
                className="w-20 h-20 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
          <button
            onClick={() => productRef.current.scrollIntoView({ behavior: 'smooth' })}
            className="text-white text-4xl animate-bounce mx-8"
          >
            ↓
          </button>
          <div className="flex flex-1 justify-start">
            {isPhoneOrSmaller && (
              <img
                src={require('../assets/nature.jpg')}
                alt="Product 2"
                className="w-20 h-20 object-cover rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>

      </div>
      <div ref={productRef} className="w-full py-10 bg-white mb-24">
        <h2 className="text-black text-3xl font-bold text-center mb-6">
          More Products
        </h2>
        <div className="flex grid-cols-2 justify-center gap-4">
          <img
            src={require('../assets/nature.jpg')}
            alt="Product 9"
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/nature.jpg')}
            alt="Product 10"
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/nature.jpg')}
            alt="Product 10"
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
          />
          <img
            src={require('../assets/nature.jpg')}
            alt="Product 10"
            className="w-32 h-32 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home