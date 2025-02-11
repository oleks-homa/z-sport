import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";

import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory } from "../state";

const CategoryListing = () => {
    const isTabletOrLarger = useMediaQuery("(min-width:930px)");
    const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
    const isPhoneOrSmaller = useMediaQuery("(max-width:655px)");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.allCategories);
    const lang = useSelector(state => state.language.currentLang);
    return (
        <>
            <Header />
            <div className='w-[95%] p-4 mx-auto flex flex-row gap-x-6 h-auto'>
                <div className="hidden lg:flex flex-col w-[30%] min-w-[250px] mt-14 top-0 self-start h-[calc(100vh-56px)] overflow-y-auto">
                    <Sidebar />
                </div>
                <div className="flex flex-col w-full lg:w-[70%]">
                    <h2 className="text-2xl font-bold mb-6 text-center uppercase relative">
                        {lang === 'pl' ? 'Kategorie' : 'Categories'}
                    </h2>
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
            <Footer />
        </>
    )
}

export default CategoryListing;