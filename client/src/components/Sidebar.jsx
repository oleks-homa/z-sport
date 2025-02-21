import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory, setCurrentSubcategory } from "../state";

const Sidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const lang = useSelector(state => state.language.currentLang);
    const categories = useSelector(state => state.category.allCategories);
    return (
        <div className="border border-gray-300 w-auto">
            {categories.map(category => (
                <div className='p-4'>
                    <h2
                        className="font-bold text-[14px] mb-2 cursor-pointer hover:text-[#3ac596] transition duration-300"
                        onClick={() => {
                            navigate(`/products/${category.namePL.toLowerCase().split(' ').join('-')}`);
                            dispatch(setCurrentCategory(category));
                        }}
                    >{lang === 'pl' ? category.namePL : category.nameEN}</h2>
                    <ul className="space-y-2 text-sm">
                        {category.subCategories.map((subcat, index) => (
                            <>
                                <li
                                    className="text-[14px] text-[#666] ml-2 border-b border-gray-300 cursor-pointer"
                                    key={index}
                                    onClick={() => {
                                        let categoryParam = null;
                                        categories.forEach(category => {
                                            category.subCategories.forEach(subcategory => {
                                                if (subcategory.id === subcat.id) categoryParam = category;
                                            })
                                        })
                                        dispatch(setCurrentCategory(categoryParam));
                                        dispatch(setCurrentSubcategory(subcat));
                                        navigate(`/products/${categoryParam.namePL.toLowerCase().split(' ').join('-')}/${subcat.namePL.toLowerCase().split(' ').join('-')}`);
                                    }}
                                >→ <span className=" hover:text-[#3ac596] transition duration-300">{lang === 'pl' ? subcat.namePL : subcat.nameEN}</span></li>
                            </>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Sidebar