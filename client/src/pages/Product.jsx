import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentSubcategory } from '../state';

const Product = () => {
  const { categoryIdParam, subcategoryParam } = useParams();

  const navigate = useNavigate();

  let dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    console.log(category)
    navigate(`/${category.name}`);
    dispatch(setCurrentCategory(category));
  }

  const handleSubcategoryClick = (subcategory) => {
    navigate(`/${categoryIdParam}/${subcategory}`);
    dispatch(setCurrentSubcategory(subcategory));
  }

  let currentProduct = useSelector(state => state.products.currentProduct);
  return (
    <>
      <Header />
      <div className={`flex flex-row items-start mt-12 mx-auto max-w-[1400px] px-4`}>
        <div className='w-[30%] border border-gray-300 p-4 mb-4'>
          <Sidebar handleCategoryClick={handleCategoryClick} handleSubcategoryClick={handleSubcategoryClick} />
        </div>
        <div className='w-[70%] flex flex-row ml-16 mt-20 border-t border-gray-300 pt-2'>
          <img src={require(`../assets/${currentProduct.picturePath}`)} alt="Product"  className='mr-8 w-[380px] h-[380px] object-cover' />
          <div>
            <h2 className='text-[26px]'>{currentProduct.name}</h2>
            <p>{currentProduct.price}$</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product