import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const ProductCard = ({product, onClick}) => {
  const isLaptopOrSmaller = useMediaQuery("(max-width:1300px)");
  const isWithoutSidebar = useMediaQuery("(max-width:1024px)");

	const lang = useSelector(state => state.language.currentLang);
  return (
    <div 
        id={product.id} 
        className={`shadow-md border border-gray-300 flex flex-col justify-center items-center cursor-pointer ${isLaptopOrSmaller ? isWithoutSidebar ? 'w-[268px]' : 'w-[200px]' : 'w-[268px]'} items-center cursor-pointer`}
        onClick={onClick}
    >
        <img src={Array.isArray(product.picturePath) ? product.picturePath[0] : product.picturePath} alt={product.namePL} className={`w-full ${isLaptopOrSmaller ? 'h-[200px]' : 'h-[300px]'} object-contain`}/>
        <p className='text-center text-lg font-bold mt-4 hover:text-[#3ac596] transition duration-300'>{lang === 'pl' ? product.namePL : product.nameEN}</p>
        <button className='bg-gray-300 hover:bg-[#3ac596] transition duration-300 w-[150px] h-[50px] my-4 rounded-lg'>{lang === 'pl' ? 'Szczegóły' : 'Details'}</button>
    </div>
  )
}

export default ProductCard