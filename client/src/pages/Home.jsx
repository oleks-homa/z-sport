import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import { data, products, companies } from '../test';
import CategoryCard from '../components/CategoryCard';
import { useMediaQuery } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Dropdown from '../components/Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories, setCompanies, setCurrentCategory, setCurrentProduct, setCurrentSubcategory, setProducts } from '../state';

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
  let currentCategory = useSelector(state => state.categories.currentCategory);
  let currentCompany = useSelector(state => state.companies.currentCompany);
  let dispatch = useDispatch();
  useEffect(() => {
    const isFirstLoad = localStorage.getItem('isFirstLoad');

    if(true){
      dispatch(setCategories(data));
      dispatch(setProducts(products));
      dispatch(setCompanies(companies));
    } else {
      return;
    }
  }, []);

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

  return (
    <>
      <Header />
      <div className={`flex ${isTabletOrLarger ? 'flex-row items-start' : 'flex-col'} mt-12 mx-auto max-w-[1400px] px-4`}>
        <div
          className={`${isWithoutSidebar ? 'hidden' : 'w-[30%] mr-12'} border border-gray-300 p-4 mb-4`}
        >
          {categoryIdParam && subcategoryParam && !productName && <Dropdown setSeed={setSeed} />}
          <Sidebar handleCategoryClick={handleCategoryClick} handleSubcategoryClick={handleSubcategoryClick}/>
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
                    onClick={() => handleCategoryClick(category)}
                  />
                ))}
              </div>
            </div>
          </>
        )}

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
      <Footer />
    </>
  )
}

export default Home