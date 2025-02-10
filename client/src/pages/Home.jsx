import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setCurrentCategory } from '../state';
import { recentProducts } from '../data';
const Home = () => {
	const lang = useSelector(state => state.language.currentLang);
	const categories = useSelector(state => state.category.allCategories);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [index, setIndex] = useState(0);
	const visibleImages = 4;

	const nextSlide = () => {
		if (index + visibleImages < recentProducts.length) {
			setIndex(index + 1);
		}
	};

	const prevSlide = () => {
		if (index > 0) {
			setIndex(index - 1);
		}
	};

	return (
		<div className='min-h-screen'>
			<Header />
			<div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url('/src/assets/bg_main.JPG')]">
				<ImageSlider />
			</div>
			<div className="flex flex-col items-center w-full mx-auto py-10 bg-white mb-24">
				<h2 className="text-black text-3xl font-bold text-center mb-6">
					{lang === 'pl' ? 'Ostatnie produkty' : 'Recent products'}
				</h2>
				<div className="flex items-center gap-4 w-full max-w-7xl mx-auto overflow-hidden">
					<button
						className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
						onClick={prevSlide}
						disabled={index === 0}
					>
						<ArrowBackIosIcon />
					</button>
					<div className="flex gap-6 overflow-hidden w-full">
						{recentProducts.slice(index, index + visibleImages).map((product, idx) => (
							<ProductCard product={product} onClick={() => 0} />
						))}
					</div>
					<button
						className="p-2 bg-gray-200 rounded-full disabled:opacity-50"
						onClick={nextSlide}
						disabled={index + visibleImages >= recentProducts.length}
					>
						<ArrowForwardIosIcon />
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home