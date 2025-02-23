import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setCurrentSubcategory } from "../state";
import Breadcrumbs from "../components/Breadcrumbs";

const SubcategoryListing = () => {
  const { categoryParam } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const category = useSelector(state => state.category.currentCategory);
  const lang = useSelector(state => state.language.currentLang);
  return (
    <>
      <Header />
      <h2 className="text-4xl text-gray-700 font-bold text-center uppercase relative mt-5">
        {lang === 'pl' ? category.namePL : category.nameEN}
      </h2>
      <div className="flex flex-col w-full max-w-[1200px] mx-auto h-auto mb-5 mt-5">
        <div className="ml-5 xl:ml-0">
          <Breadcrumbs />
        </div>
        <div className='flex lg:flex-row lg:gap-x-6 mt-5'>
          <div className="hidden lg:flex flex-col w-[30%] h-[calc(100vh-56px)] overflow-y-auto">
            <Sidebar />
          </div>
          <div className="flex flex-col w-full lg:w-[70%]">
            <div
              className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-6'
            >
              {category.subCategories.map((subcategory) => (
                <CategoryCard
                  key={subcategory.id}
                  category={subcategory}
                  onClick={() => {
                    dispatch(setCurrentSubcategory(subcategory));
                    navigate(`/products/${categoryParam}/${subcategory.namePL.replace('/', '|').toLowerCase().split(' ').join('-')}`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SubcategoryListing;