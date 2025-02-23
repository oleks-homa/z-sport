import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';
import CategoryListing from './pages/CategoryListing.jsx';
import SubcategoryListing from './pages/SubcategoryListing.jsx';
import ProductListing from './pages/ProductListing.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { categoriesZSPORT, productsZSPORT } from './data.js';
import { setAllCategories, setCurrentCategory, setCurrentProduct, setCurrentSubcategory, setAllProducts } from './state/index.js';

function App() {
	const dispatch = useDispatch();
	//const { categoryParam, subcategoryParam, productName } = useParams();

	const categories = useSelector(state => state.category.allCategories);
	const products = useSelector(state => state.products.allProducts);

	dispatch(setAllCategories(categoriesZSPORT));

	dispatch(setAllProducts(productsZSPORT));
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<CategoryListing />} />
					<Route path="/products/:categoryParam" element={<SubcategoryListing />} />
					<Route path="/products/:categoryParam/:subcategoryParam" element={<ProductListing />} />
					<Route path="/products/:categoryParam/:subcategoryParam/:productName" element={<Product />} />
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/contact"
						element={<Contact />}
					/>
					{/* <Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/register"
						element={<Register />}
					/> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
