import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory } from "../state";
import Breadcrumbs from "../components/Breadcrumbs";

const CategoryListing = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.allCategories);
    const lang = useSelector(state => state.language.currentLang);
    return (
        <>
            <Header />
            <h2 className="text-4xl text-gray-700 font-bold mb-6 text-center uppercase relative mt-5">
                {lang === 'pl' ? 'Kategorie' : 'Categories'}
            </h2>
            <div className="flex flex-col w-full max-w-[1200px] mx-auto h-auto mb-5 mt-5">
                <Breadcrumbs />
                <div className='flex lg:flex-row lg:space-x-6 mt-5'>
                    <div className="hidden lg:flex flex-col w-[30%] h-[calc(100vh-56px)] overflow-y-auto">
                        <Sidebar />
                    </div>
                    <div className="flex flex-col w-full lg:w-[70%]">
                        <div
                            className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-auto gap-6'
                        >
                            {categories.map((category) => (
                                <CategoryCard
                                    key={category.id}
                                    category={category}
                                    onClick={() => {
                                        dispatch(setCurrentCategory(category));
                                        navigate(`/products/${category.namePL.toLowerCase().replace('/', '|').split(' ').join('-')}`);
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

export default CategoryListing;