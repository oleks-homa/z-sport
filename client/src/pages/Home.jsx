import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import { data, products, companies, swiperLinks } from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Dropdown from '../components/Dropdown';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentProduct, setCurrentSubcategory } from '../state';

const Home = () => {
  //Media queries
  const isTabletOrLarger = useMediaQuery("(min-width:930px)");
  const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
  const isPhoneOrSmaller = useMediaQuery("(max-width:655px)");

  //Getting url params
  const { categoryIdParam, subcategoryParam, productName } = useParams();

  //Function to navigate between routes
  const navigate = useNavigate();

  //Redux setup
  let currentCategory = useSelector(state => state.category.currentCategory);
  let currentCompany = useSelector(state => state.company.currentCompany);
  let dispatch = useDispatch();

  const [seed, setSeed] = useState(1);

  let numberOfProducts = 0;

  let currentProductsList = [];
  if (subcategoryParam) {
    products.forEach((product) => {
      if (product.subCategory == subcategoryParam) {
        currentProductsList.push(product);
      }
    })
  }

  const handleCategoryClick = (category) => {
    console.log(category)
    navigate(`/${category.name}`);
    dispatch(setCurrentCategory(category));
  }

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/${categoryIdParam}/${subcategory}`);
    dispatch(setCurrentSubcategory(subcategory));
  }

  const handleProductClick = (product) => {
    navigate(`/${categoryIdParam}/${subcategoryParam}/${product.name}`);
    dispatch(setCurrentProduct(product));
  }

  const productRef = useRef(null);

  const scrollToProducts = () => {
    productRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header />
      <div className={`flex flex-col justify-end items-center w-full h-screen px-4 bg-[url('/src/assets/bg_main.JPG')] bg-cover`}>
        <div className="flex items-center space-x-10 mb-36">
          <div className="flex space-x-20">
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 1"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 2"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 3"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 4"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
          </div>

          <button
            onClick={scrollToProducts}
            className="text-white text-4xl animate-bounce"
          >
            ↓
          </button>

          <div className="flex space-x-20">
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 5"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 6"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 7"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
            <img
              src={require('../assets/nature.jpg')}
              alt="Product 8"
              className="w-24 h-24 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>


        {categoryIdParam && !subcategoryParam && (
          <>
            <div className={`${isWithoutSidebar ? 'w-full' : 'w-[70%'} p-4 mx-auto flex flex-col items-center`}>
              <p className="text-lg font-bold mb-4">Subcategories</p>
              <div className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}>
                {currentCategory.subcategories.map((subcat, index) => (

                  <CategoryCard
                    key={index}
                    name={subcat}
                    picturePath='nature.jpg'
                    id={index}
                    onClick={() => handleSubcategoryClick(subcat)}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {categoryIdParam && subcategoryParam && !productName && (
          <>
            <div className={`${isWithoutSidebar ? 'w-full' : 'w-[70%'} p-4 mx-auto flex flex-col items-center`} key={seed}>
              <p className="text-lg font-bold mb-4">Products</p>
              <div className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}>
                {currentProductsList.map((product, index) => {
                  if (currentCompany == product.company || currentCompany == 'All') {
                    numberOfProducts++;
                    return (
                      <ProductCard
                        key={index}
                        name={product.name}
                        picturePath={product.picturePath}
                        price={product.price}
                        description={product.desciption}
                        id={index}
                        onClick={() => handleProductClick(product)}
                      />
                    )
                  } else {
                    return (<></>)
                  }
                })}
                {numberOfProducts === 0 && (
                  <p>Unfortunately there is no such products from {currentCompany}</p>
                )}
              </div>
            </div>
          </>
        )}


      </div>
      <div ref={productRef} className="w-full py-10 bg-white">
        <h2 className="text-white text-3xl font-bold text-center mb-6">
          More Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home