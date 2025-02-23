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
			src: '/images/gallery1.jpg'
		},
		{
			src: '/images/gallery2.jpg'
		},
		{
			src: '/images/gallery3.jpg'
		},
		{
			src: '/images/gallery6.jpg'
		},
		{
			src: '/images/gallery9.jpg'
		},
		{
			src: '/images/gallery8.jpg'
		},
		{
			src: '/images/gallery5.jpg'
		},
		{
			src: '/images/gallery10.jpg'
		},
		{
			src: '/images/gallery11.jpg'
		},
		{
			src: '/images/gallery12.jpg'
		},
		{
			src: '/images/gallery13.jpg'
		},
		{
			src: '/images/gallery14.jpg'
		},
		{
			src: '/images/gallery15.jpg'
		},
		{
			src: '/images/gallery16.jpg'
		},
		{
			src: '/images/gallery17.jpg'
		},
		{
			src: '/images/gallery4.jpg'
		},
		{
			src: '/images/gallery7.jpg'
		},
	]

	return (
		<div className='min-h-screen'>
			<div className='sticky top-0 left-0 lg:relative z-50'>
				<Header />
			</div>
			<div className="flex justify-center items-center w-full min-h-screen bg-cover bg-center bg-[url('/src/assets/bg_main.JPG')] relative z-40">
				<div className="absolute inset-0 bg-black opacity-50 z-30"></div>
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
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-5 mx-5 items-center'>
				{gallery.map((image, index) => (
					<img src={image.src} alt="Image" onClick={() => setBoxIndex(index)} className='w-full xl:h-fit h-auto object-contain xl:object-cover rounded-lg cursor-pointer' />
				))}

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