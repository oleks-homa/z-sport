import { useSelector } from "react-redux";

const CategoryCard = ({ category, onClick }) => {
  const lang = useSelector(state => state.language.currentLang);
  return (
    <div 
        id={category.id} 
        className={`shadow-md border border-gray-300 flex flex-col justify-center w-[268px] h-[340px] items-center cursor-pointer`}
        onClick={onClick}
    >
        <img src={category.picturePath} alt={category.namePL} className='w-full h-fit object-contain' />
        <p className='text-center font-bold my-6 hover:text-[#3ac596] transition duration-300'>{lang === 'pl' ? category.namePL : category.nameEN}</p>
    </div>
  )
}

export default CategoryCard