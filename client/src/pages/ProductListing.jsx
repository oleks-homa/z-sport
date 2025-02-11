import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from '../components/Footer';
import Sidebar from "../components/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

import { setCurrentProduct } from "../state";
import { useState } from "react";

const ProductListing = () => {
	const [numberOfProducts, setNumberOfProducts] = useState(12);

	const isTabletOrLarger = useMediaQuery("(min-width:930px)");
	const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
	const isPhoneOrSmaller = useMediaQuery("(max-width:655px)");

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
			<div className={`w-[95%] p-4 mx-auto flex flex-row gap-x-6`}>
				<div className="hidden lg:flex flex-col w-[30%] min-w-[250px] mt-14 sticky top-0 self-start h-[calc(100vh-56px)] overflow-y-auto">
					<Sidebar />
				</div>
				<div className="flex flex-col w-full lg:w-[70%]">
					<h2 className="text-2xl font-bold mb-6 text-center uppercase relative">
						{lang === 'pl' ? currentSubcategory.namePL : currentSubcategory.nameEN}
					</h2>
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
						<p className="">{lang === 'pl' ? 'Załadowałeś wszystkie produkty' : 'You have loaded all products'}</p>
					)}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductListing;