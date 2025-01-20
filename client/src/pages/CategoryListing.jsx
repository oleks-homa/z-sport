import Header from "../components/Header";
import CategoryCard from "../components/CategoryCard";

import { useParams } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const CategoryListing = () => {
    const isTabletOrLarger = useMediaQuery("(min-width:930px)");
    const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
    const isPhoneOrSmaller = useMediaQuery("(max-width:655px)");

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.allCategories);
    const products = useSelector(state => state.products.allProducts);
    return (
        <>
            <Header />
            <div className={`w-full p-4 mx-auto flex flex-col items-center`}>
                <p className="text-lg font-bold mb-4 text-center relative">
                    Categories
                </p>
                <div
                    className={`grid ${isTabletOrLarger ? 'grid-cols-3' : isPhoneOrSmaller ? 'grid-cols-1' : 'grid-cols-2'} ${isWithoutSidebar ? 'px-8' : ''} gap-8 mx-auto`}
                >
                    {categories.map((category) => (
                        <CategoryCard
                            key={category.id}
                            name={category.name}
                            picturePath={category.picturePath}
                            id={category.id}
                            onClick={() => console.log(products)}
                        />
                    ))}
                </div>
            </div>

        </>
    )
}

export default CategoryListing;