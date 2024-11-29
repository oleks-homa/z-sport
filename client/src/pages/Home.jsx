import React, { useState } from 'react'
import Header from '../components/Header'
import data from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {
  const isTabletOrLarger = useMediaQuery("(min-width:817px)");
  const {categoryIdParam, subcategoryParam} = useParams();
  const navigate = useNavigate();

  // const selectedCategory = categoryIdParam
  //   ? data.find((category) => category.id === parseInt(categoryIdParam))
  //   : null;
  let selectedCategory = null;
  data.forEach((obj) => {
    if(obj.id == categoryIdParam){
        selectedCategory = obj;
    }
  })

  const handleCategoryClick = (id) => {
    navigate(`/${id}`);
  }

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/${categoryIdParam}/${subcategory}`);
  }

  return (
    <>
      <Header />
      <div className={`flex ${isTabletOrLarger ? 'flex-row' : 'flex-col'} mt-12`}>
        <div
          className={`${isTabletOrLarger ? 'w-[30%] ml-16 mr-10' : 'hidden'
            } border border-black p-4`}
        >
          <h2>Sidebar</h2>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        </div>

        {!categoryIdParam && (
          <div
            className={`${isTabletOrLarger ? 'w-[50%] mr-14' : 'w-full'
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
        )}

        {categoryIdParam && !subcategoryParam && selectedCategory && (
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
        )}


      </div>

    </>
  )
}

export default Home