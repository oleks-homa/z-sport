import { useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";

const CategoryCard = ({ category, onClick }) => {
  const isLaptopOrSmaller = useMediaQuery("(max-width:1300px)");
  const isWithoutSidebar = useMediaQuery("(max-width:1024px)");

  const lang = useSelector(state => state.language.currentLang);
  return (
    <div 
        id={category.id} 
        className={`shadow-md border border-gray-300 flex flex-col justify-center ${isLaptopOrSmaller ? isWithoutSidebar ? 'w-[268px]' : 'w-[200px]' : 'w-[268px]'} items-center cursor-pointer`}
        onClick={onClick}
    >
        <img src={category.picturePath} alt={category.namePL} className={`w-full ${isLaptopOrSmaller ? 'h-[200px]' : 'h-[300px]'} object-contain`}/>
        <p className='text-center font-bold my-6 hover:text-[#3ac596] transition duration-300'>{lang === 'pl' ? category.namePL : category.nameEN}</p>
    </div>
  )
}

export default CategoryCard