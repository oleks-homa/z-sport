import React, { useState } from 'react'
import Header from '../components/Header'
import { data, products } from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const isTabletOrLarger = useMediaQuery("(min-width:930px)");
  const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
  const isPhoneOrSmaller = useMediaQuery("(max-width:655px)");
  const { categoryIdParam, subcategoryParam } = useParams();
  const navigate = useNavigate();

  let selectedCategory = null;
  let selectedProduct = null;

  let currentProductsList = [];
  if (subcategoryParam) {
    products.forEach((product) => {
      if (product.subCategory == subcategoryParam) {
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
      <div className={`flex ${isTabletOrLarger ? 'flex-row items-start' : 'flex-col'} mt-12 mx-auto max-w-[1400px] px-4`}>
        <div
          className={`${isWithoutSidebar ? 'hidden' : 'w-[30%] mr-12'} border border-gray-300 p-4 mb-4`}
        >
          <Sidebar data={data} />
        </div>

        {!categoryIdParam && (
          <>
            <div className={`${isWithoutSidebar ? 'w-full' : 'w-[70%'} p-4 mx-auto flex flex-col items-center`}>
              <p className="text-lg font-bold mb-4 text-center relative">
                Categories
              </p>
              <div
                className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}
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
            </div>
          </>
        )}

        {categoryIdParam && !subcategoryParam && selectedCategory && (
          <>
            <div className={`${isWithoutSidebar ? 'w-full' : 'w-[70%'} p-4 mx-auto flex flex-col items-center`}>
              <p className="text-lg font-bold mb-4">Subcategories</p>
              <div className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}>
                {selectedCategory.subcategories.map((subcat, index) => (

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

        {categoryIdParam && subcategoryParam && !selectedProduct && (
          <>
            <div className={`${isWithoutSidebar ? 'w-full' : 'w-[70%'} p-4 mx-auto flex flex-col items-center`}>
              <p className="text-lg font-bold mb-4">Products</p>
              <div className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}>
                {currentProductsList.map((product, index) => (
                  <ProductCard
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
            </div>
          </>
        )}


      </div>
      <Footer />
    </>
  )
}

export default Home