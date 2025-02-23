import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { setCurrentCategory, setCurrentProduct, setCurrentSubcategory } from "../state";


const Breadcrumbs = () => {
    const { categoryParam, subcategoryParam, productName } = useParams();
    const dispatch = useDispatch();
    const lang = useSelector(state => state.language.currentLang);
    const currentCategory = useSelector(state => state.category.currentCategory);
    const currentSubcategory = useSelector(state => state.subcategory.currentSubcategory);
    const currentProduct = useSelector(state => state.products.currentProduct);

    const categories = useSelector(state => state.category.allCategories);
    const products = useSelector(state => state.products.allProducts);

    const checkCategory = () => {
        if(categoryParam !== currentCategory.namePL.toLowerCase().replace('/', '|').split(' ').join('-')) {
            categories.forEach(category => {
                if(category.namePL.toLowerCase().replace('/', '|').split(' ').join('-') === categoryParam) dispatch(setCurrentCategory(category));
            })
        }
    }

    const checkSubCategory = () => {
        if(subcategoryParam !== currentSubcategory.namePL.toLowerCase().replace('/', '|').split(' ').join('-')) {
            categories.forEach(category => {
                category.subCategories.forEach(subcategory => {
                    if(subcategory.namePL.toLowerCase().replace('/', '|').split(' ').join('-') === subcategoryParam) dispatch(setCurrentSubcategory(subcategory));
                })
                
            })
        }
    }

    const checkProduct = () => {
        if(productName !== currentProduct.namePL.toLowerCase().replace('/', '|').split(' ').join('-')) {
            products.forEach(product => {
                if(product.namePL.toLowerCase().replace('/', '|').split(' ').join('-') === productName) dispatch(setCurrentProduct(product));
            })
        }
    }

    checkCategory();
    checkSubCategory();
    checkProduct();
  return (
    <div className="">
        <nav>
            <Link 
                to='/'
                className="text-lg hover:text-red-400 transition-all duration-200"
            >
                {lang === 'pl' ? 'Strona główna > ' : 'Home > '}
            </Link>
            {categoryParam && (
                <Link 
                    to={`/products/${categoryParam}`}
                    className="text-lg hover:text-red-400 transition-all duration-200"
                >
                    {lang === 'pl' ? currentCategory.namePL + ' > ' : currentCategory.nameEN + ' > '} 
                </Link>
            )}
            {subcategoryParam && (
                <Link
                    to={`/products/${categoryParam}/${subcategoryParam}`}
                    className="text-lg hover:text-red-400 transition-all duration-200"
                >
                    {lang === 'pl' ? currentSubcategory.namePL + ' > ' : currentSubcategory.nameEN + ' > '}
                </Link>
            )}
            {productName && (
                <Link
                    to={`/products/${categoryParam}/${subcategoryParam}/${productName}`}
                    className="text-lg hover:text-red-400 transition-all duration-200"
                >
                    {lang === 'pl' ? currentProduct.namePL : currentProduct.nameEN}
                </Link>
            )}
        </nav>
    </div>
  )
}

export default Breadcrumbs;