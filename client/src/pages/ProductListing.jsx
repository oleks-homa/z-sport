import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { setCurrentProduct } from "../state";
import { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductListing = () => {
  const [numberOfProducts, setNumberOfProducts] = useState(12);

  const { categoryParam, subcategoryParam } = useParams();

  const lang = useSelector(state => state.language.currentLang);
  const currentSubcategory = useSelector(state => state.subcategory.currentSubcategory);
  const products = useSelector(state => state.products.allProducts);
  const belongingProducts = [];

  products.forEach(product => {
    const belongsToSubcategory = Array.isArray(product.subcategoryID) ? product.subcategoryID.includes(currentSubcategory.id) : product.subcategoryID === currentSubcategory.id;
    if (belongsToSubcategory) belongingProducts.push(product);
  })

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const generateProductsArray = () => {
    let result = [];
    let limit = numberOfProducts > belongingProducts.length ? belongingProducts.length : numberOfProducts;
    for (let i = 0; i < limit; i++) {
      result.push(belongingProducts[i]);
    }

    return result;
  }
  const productsToShow = generateProductsArray();
  return (
    <>
      <Header />
      <h2 className="text-4xl text-gray-700 font-bold text-center uppercase relative mt-5">
        {lang === 'pl' ? currentSubcategory.namePL : currentSubcategory.nameEN}
      </h2>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto h-auto mt-5 mb-5">
        <Breadcrumbs />
        <div className='flex lg:flex-row lg:gap-x-6 mt-5'>
          <div className="hidden lg:flex flex-col w-[30%] sticky top-0 h-[calc(100vh-56px)] overflow-y-auto">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full lg:w-[70%]">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-8'>
              {productsToShow.map((product, index) => (
                <ProductCard
                  product={product}
                  onClick={() => {
                    dispatch(setCurrentProduct(product));
                    navigate(`/products/${categoryParam}/${subcategoryParam}/${product.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`)
                  }}
                />
              ))}
            </div>
            {numberOfProducts < belongingProducts.length ? (
              <div
                onClick={() => setNumberOfProducts(numberOfProducts + 24)}
                className="mx-auto text-center mt-6 border border-green-300 w-28 h-12 grid place-items-center rounded-lg bg-green-300 hover:bg-white transition-all duration-200 shadow-md shadow-green-200 cursor-pointer"
              >
                {lang === 'pl' ? 'Więcej' : 'More'}
              </div>
            ) : (
              <p className="text-center mt-5">{lang === 'pl' ? 'Załadowałeś wszystkie produkty' : 'You have loaded all products'}</p>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ProductListing;