import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import Admin from './pages/Admin.jsx';
import CategoryListing from './pages/CategoryListing.jsx';
import SubcategoryListing from './pages/SubcategoryListing.jsx';
import ProductListing from './pages/ProductListing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { categoriesDHZ, categoriesZSPORT, productsDHZ, productsZSPORT } from './data.js';
import { setCategories, setCurrentCategory, setCurrentCompany, setCurrentProduct, setCurrentSubcategory, setProducts } from './state/index.js';

function App() {
	const dispatch = useDispatch();
	const { company, categoryParam, subcategoryParam, productName } = useParams();

	const currentCompany = useSelector(state => state.company.currentCompany);

	useEffect(() => {
		if (!company) {
			dispatch(setCurrentCompany(''));
		}

		if (currentCompany !== company?.toUpperCase()) {
			if (company === "dhz") {
				dispatch(setCategories(categoriesDHZ));
				dispatch(setProducts(productsDHZ));
				dispatch(setCurrentCompany("DHZ"));
			} else if (company === "zsport") {
				dispatch(setCategories(categoriesZSPORT));
				dispatch(setProducts(productsZSPORT));
				dispatch(setCurrentCompany("ZSPORT"));
			}
		}

		dispatch(setCurrentCategory(categoryParam || ""));
		dispatch(setCurrentSubcategory(subcategoryParam || ""));
		dispatch(setCurrentProduct(productName || ""));
	}, [company, categoryParam, subcategoryParam, productName]);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:company" element={<CategoryListing />} />
					<Route path="/:company/:categoryParam" element={<SubcategoryListing />} />
					<Route path="/:company/:categoryParam/:subcategoryParam" element={<ProductListing />} />
					<Route path="/:company/:categoryParam/:subcategoryParam/:productName" element={<Product />} />
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					<Route
						path="/adminPanel"
						element={<Admin />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
