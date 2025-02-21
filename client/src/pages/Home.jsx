import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ImageSlider from '../components/ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { setCurrentCategory, setCurrentProduct, setCurrentSubcategory } from '../state';
import { recentProducts } from '../data';
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Home = () => {
	const lang = useSelector(state => state.language.currentLang);
	const categories = useSelector(state => state.category.allCategories);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [index, setIndex] = useState(0);
	const [boxIndex, setBoxIndex] = useState(-1);
	const [visibleImages, setVisibleImages] = useState(0);

	const updateVisibleImages = () => {
		const width = window.innerWidth;
		if(width >= 1024){
			setVisibleImages(4);
		} else if(width >= 768) {
			setVisibleImages(3);
		} else {
			setVisibleImages(1);
		}
	}

	useEffect(() => {
		updateVisibleImages();
    	window.addEventListener("resize", updateVisibleImages);
	}, [])

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

	const gallery = [
		{
			src: '/images/gallery1.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery2.jpg',
			width: 500,
			height: 400
		},
		{
			src: '/images/gallery3.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery4.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery5.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery6.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery7.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery8.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery9.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery10.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery11.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery12.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery13.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery14.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery15.jpg',
			width: 500,
			height: 300
		},
		{
			src: '/images/gallery16.jpg',
			width: 400,
			height: 300
		},
		{
			src: '/images/gallery17.jpg',
			width: 400,
			height: 300
		},
	]

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
				<div className="flex items-center gap-3 w-full max-w-7xl mx-auto overflow-hidden">
					<button
						className="ml-2 p-2 bg-gray-200 rounded-full disabled:opacity-50"
						onClick={prevSlide}
						disabled={index === 0}
					>
						<ArrowBackIosIcon />
					</button>
					<div className="flex justify-center gap-6 overflow-hidden w-full">
						{recentProducts.slice(index, index + visibleImages).map((product, idx) => (
							<ProductCard product={product} onClick={() => {
								let categoryParam = '';
								let subcategoryParam = '';
								categories.forEach(category => {
									if(category.id === product.categoryID || product.categoryID.includes(category.id)) {
										categoryParam = category.namePL;
										dispatch(setCurrentCategory(category));

										category.subCategories.forEach(subcat => {
											if(product.subcategoryID.includes(subcat.id) || product.subcategoryID === subcat.id){
												subcategoryParam = subcat.namePL;
												dispatch(setCurrentSubcategory(subcat));
											}
										})
									}
								})
								dispatch(setCurrentProduct(product));
								navigate(`/products/${categoryParam.toLowerCase().split(' ').join('-')}/${subcategoryParam.toLowerCase().split(' ').join('-')}/${product.namePL.toLowerCase().split(' ').join('-')}`);
							}} />
						))}
					</div>
					<button
						className="mr-2 p-2 bg-gray-200 rounded-full disabled:opacity-50"
						onClick={nextSlide}
						disabled={index + visibleImages >= recentProducts.length}
					>
						<ArrowForwardIosIcon />
					</button>
				</div>
			</div>
			<div className='block mb-5 mx-5'>
				<RowsPhotoAlbum
					photos={gallery}
					onClick={({ index }) => setBoxIndex(index)}
				/>
				<Lightbox
					slides={gallery}
					open={boxIndex >= 0}
					index={boxIndex}
					close={() => setBoxIndex(-1)}
					plugins={[Fullscreen, Thumbnails, Zoom]}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default Home