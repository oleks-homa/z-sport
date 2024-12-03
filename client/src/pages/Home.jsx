import React, { useState } from 'react'
import Header from '../components/Header'
import {data, products} from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Home = () => {
  const isTabletOrLarger = useMediaQuery("(min-width:817px)");
  const { categoryIdParam, subcategoryParam } = useParams();
  const navigate = useNavigate();

  let selectedCategory = null;
  let selectedProduct = null;

  let currentProductsList = [];
  if(subcategoryParam){
    products.forEach((product) => {
      if(product.subCategory == subcategoryParam){
        currentProductsList.push(product);
      }
    })
  }

  data.forEach((obj) => {
    if (obj.id == categoryIdParam) {
      selectedCategory = obj;
    }
  })

  const handleCategoryClick = (id) => {
    navigate(`/${id}`);
  }

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/${categoryIdParam}/${subcategory}`);
  }

  const handleProductClick = (productName) => {
    navigate(`/${categoryIdParam}/${subcategoryParam}/${productName}`);
  }

  return (
    <>
      <Header />
      <div className={`flex ${isTabletOrLarger ? 'flex-row items-start' : 'flex-col'} mt-12`}>
        <div
          className={`${isTabletOrLarger ? 'w-[20%] ml-24 mr-16' : 'hidden'
            } border border-gray-300 p-4`}
        >
          <Sidebar data={data} />
        </div>

        {!categoryIdParam && (
          <>
            <p>Categories</p>
            <div
              className={`${isTabletOrLarger ? 'w-[60%] mr-8' : 'w-full'
                } grid ${isTabletOrLarger ? 'grid-cols-3' : 'grid-cols-1'} gap-4 p-4 border border-black`}
            >
              {data.map((category) => (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  picturePath={category.picturePath}
                  id={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          </>
        )}

        {categoryIdParam && !subcategoryParam && selectedCategory && (
          <>
            <p>Subcategories</p>
            <div
              className={`${isTabletOrLarger ? 'w-[50%] mr-14' : 'w-full'
                } grid ${isTabletOrLarger ? 'grid-cols-3' : 'grid-cols-1'} gap-4 p-4 border border-black`}
            >
              {selectedCategory.subcategories.map((subcat, index) => (

                <CategoryCard
                  key={index}
                  name={subcat}
                  picturePath='logo.png'
                  id={index}
                  onClick={() => handleSubcategoryClick(subcat)}
                />
              ))}
            </div>
          </>
        )}

        {categoryIdParam && subcategoryParam && !selectedProduct && (
          <>
            <p>Products</p>
            <div
              className={`${isTabletOrLarger ? 'w-[50%] mr-14' : 'w-full'
                } grid ${isTabletOrLarger ? 'grid-cols-3' : 'grid-cols-1'} gap-4 p-4 border border-black`}
            >
              {currentProductsList.map((product, index) => (

                <CategoryCard
                  key={index}
                  name={product.name}
                  picturePath={product.picturePath}
                  price={product.price}
                  description={product.desciption}
                  id={index}
                  onClick={() => handleProductClick(product.name)}
                />
              ))}
            </div>
          </>
        )}


      </div>
      <Footer />
    </>
  )
}

export default Home