import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentCategory, setCurrentSubcategory } from '../state';
import { useState } from 'react';

const Product = () => {
	const [chosenWeight, setChosenWeight] = useState(0);
	const [currentStackWeight, setCurrentStackWeight] = useState(0);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const navigate = useNavigate();
	let dispatch = useDispatch();

	const currentProduct = useSelector(state => state.products.currentProduct);
	const lang = useSelector(state => state.language.currentLang);
	const description = lang === 'pl' ? currentProduct.descriptionPL : currentProduct.descriptionEN;
	const categories = useSelector(state => state.category.allCategories);
	const createSubcategoriesToDisplay = () => {
		let result = [];

		if (Array.isArray(currentProduct.subcategoryID)) {
			currentProduct.subcategoryID.map(subcategory => {
				for (let i of categories) {
					for (let j of i.subCategories) {
						if (subcategory === j.id) {
							result.push(j)
						}
					}

				}
			})
		} else {
			for (let i of categories) {
				for (let j of i.subCategories) {
					if (currentProduct.subcategoryID === j.id) {
						result.push(j)
					}
				}
			}
		}
		return result;
	}

	const createCategoriesToDisplay = () => {
		let result = [];

		if (Array.isArray(currentProduct.categoryID)) {
			currentProduct.categoryID.map(category => {
				for (let i of categories) {
					if (category === i.id) {
						result.push(i)
					}
				}
			})
		} else {
			for (let i of categories) {
				if (currentProduct.categoryID === i.id) {
					result.push(i)
				}
			}
		}
		return result
	}
	return (
		<>
			<Header />
			<div className='flex justify-center w-full bg-[#FBFBFB] min-h-screen'>
				<div className={`flex flex-col w-[80%] max-w-[1400px] px-4 mt-12 mx-auto items-start`}>
					<div className='w-full flex flex-row items-center pt-4'>
						<img 
							src={Array.isArray(currentProduct.picturePath) ? currentProduct.picturePath[chosenWeight] : currentProduct.picturePath}
							alt="Product"
							className='mr-8 w-[600px] h-[600px] object-cover'
							onClick={() => setIsModalOpen(true)}
						/>
						{isModalOpen && (
							<div
								className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center"
								onClick={() => setIsModalOpen(false)}
							>
								<div
									className="relative"
									onClick={(e) => e.stopPropagation()}
								>
									<img
										src={Array.isArray(currentProduct.picturePath) ? currentProduct.picturePath[chosenWeight] : currentProduct.picturePath}
										alt="Product Enlarged"
										className="max-w-full max-h-screen object-contain"
									/>
									<button
										className="absolute top-2 right-2 bg-white text-black rounded-full p-2"
										onClick={() => setIsModalOpen(false)}
									>
										&times;
									</button>
								</div>
							</div>
						)}
						<div className="ml-6 flex flex-col items-start self-start">
							<h2 className="text-[26px] font-bold mb-2">
								{lang === 'pl' ? currentProduct.namePL : currentProduct.nameEN}
							</h2>

							<p className='text-gray-700 text-xl'>{lang === 'pl' ? 'Cena na zapytanie' : 'Price upon request'}</p>
							<Link to='/contact' className='text-red-400 text-xl cursor-pointer hover:text-red-500 transition-all duration-200'>{lang === 'pl' ? 'Dowiedz się jaka jest cena' : 'Find out the price'}</Link>

							<div className='w-full border-t border-gray-800 my-6'></div>
							{Array.isArray(currentProduct.properties.weight) && (
								<>
									<p className='text-gray-600 font-semibold'>{lang === 'pl' ? 'Waga' : 'Weight'}</p>
									<div className='flex flex-row mb-3'>
										{currentProduct.properties.weight.map((weight, index) => (
											<div
												className={`border border-gray-500 ${chosenWeight === index ? 'border-[3px]' : ''} cursor-pointer w-8 h-8 rounded-md bg-white flex justify-center items-center mr-2 hover:border-[3px] transition-all duration-100`}
												onClick={() => setChosenWeight(index)}
											>{weight}</div>
										))}
									</div>
								</>

							)}
							{Object.hasOwn(currentProduct.properties, 'stackWeight') && (
								<>
									<p className='text-gray-600 font-semibold'>{lang === 'pl' ? 'Waga steku' : 'Stack Weight'}: {currentStackWeight}</p>
									<div className='flex flex-row'>
										{currentProduct.properties.stackWeight.map((weight, index) => (
											<div
												className='cursor-pointer w-8 h-8 rounded-md bg-white border border-gray-500 flex justify-center items-center mr-2 hover:border-[3px] transition-all duration-100'
												onClick={() => setCurrentStackWeight(weight)}
											>{weight}</div>
										))}
									</div>
									<p
										className='cursor-pointer text-gray-600 mb-3'
										onClick={() => setCurrentStackWeight(0)}
									>{lang === 'pl' ? 'Wyczyść' : 'Clear'}</p>
								</>
							)}
							<div>
								<p className='text-[13px] text-gray-500 uppercase'><span className='text-gray-600 font-bold'>{lang === 'pl' ? 'Artykuł' : 'ID'}:</span> {currentProduct.id.replace('_', '')}</p>
								<p
									className='text-[13px] text-gray-500 uppercase'
								>
									<span className='text-gray-600 font-bold'>{lang === 'pl' ? 'Kategorie' : 'Categories'}: </span>
									{createSubcategoriesToDisplay().map(subcat => {
										let categoryParam = null;
										categories.forEach(category => {
											category.subCategories.forEach(subcategory => {
												if (subcategory.id === subcat.id) categoryParam = category;
											})
										})
										return (
											<Link
												to={`/products/${categoryParam.namePL.toLowerCase().split(' ').join('-')}/${subcat.namePL.toLowerCase().split(' ').join('-')}`}
												onClick={() => {
													dispatch(setCurrentCategory(categoryParam));
													dispatch(setCurrentSubcategory(subcat));
												}}
												className='hover:text-red-400 transition-all duration-150'
											>
												{lang === 'pl' ? subcat.namePL : subcat.nameEN},
											</Link>
										)
									})}
									{createCategoriesToDisplay().map(category => (
										<Link
											to={`/products/${category.namePL.toLowerCase().split(' ').join('-')}`}
											onClick={() => {
												dispatch(setCurrentCategory(category))
											}}
											className='hover:text-red-400 transition-all duration-150'
										>
											{lang === 'pl' ? category.namePL : category.nameEN},
										</Link>
									))}
								</p>
							</div>
							<table className='table-fixed border-collapse border border-gray-400 w-full text-lg mt-4'>
								<tbody className='divide-y divide-gray-400'>
									<tr className={`${currentProduct.properties.length === 0 ? 'hidden' : 'divide-x divide-gray-400'}`}>
										<td className="w-1/2 font-bold text-gray-700 p-4 text-left">
											{lang === 'pl' ? 'Długość' : 'Length'}:
										</td>
										<td className="w-1/2 p-4 text-left">{currentProduct.properties.length} cm</td>
									</tr>

									<tr className={`${currentProduct.properties.width === 0 ? 'hidden' : 'divide-x divide-gray-400'}`}>
										<td className="w-1/2 font-bold text-gray-700 p-4 text-left">
											{lang === 'pl' ? 'Szerokość' : 'Width'}:
										</td>
										<td className="w-1/2 p-4 text-left">{currentProduct.properties.width} cm</td>
									</tr>

									<tr className={`${currentProduct.properties.height === 0 ? 'hidden' : 'divide-x divide-gray-400'}`}>
										<td className="w-1/2 font-bold text-gray-700 p-4 text-left">
											{lang === 'pl' ? 'Wysokość' : 'Height'}:
										</td>
										<td className="w-1/2 p-4 text-left">{currentProduct.properties.height} cm</td>
									</tr>

									<tr className={`${currentProduct.properties.weight === 0 ? 'hidden' : 'divide-x divide-gray-400'}`}>
										<td className="w-1/2 font-bold text-gray-700 p-4 text-left">
											{lang === 'pl' ? 'Waga' : 'Weight'}:
										</td>
										<td className="w-1/2 p-4 text-left">
											{`${Array.isArray(currentProduct.properties.weight)
												? currentProduct.properties.weight[chosenWeight]
												: currentProduct.properties.stackWeight
													? currentProduct.properties.weight + currentStackWeight
													: currentProduct.properties.weight}`} kg
										</td>
									</tr>
								</tbody>
							</table>
						</div>



					</div>
					<div className='w-full mt-6 text-[#6E6D76] text-[16px] text-justify'>
						{description.split('\n\n').map((paragraph, index) => {
							if (paragraph.includes('•')) {
								return (
									<ul key={index} className="list-none pl-4">
										{paragraph.split('\n').map((item, i) =>
											item.startsWith('•') ? <li key={i} className="mt-2">• {item.slice(2)}</li> : <p key={i}>{item}</p>
										)}
									</ul>
								);
							} else {
								return <p key={index} className="mb-4">{paragraph}</p>;
							}
						})}
					</div>
				</div>

			</div>
			<Footer />
		</>
	)
}

export default Product