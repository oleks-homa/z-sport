import { useMediaQuery } from "@mui/material";

const CategoryCard = ({name, picturePath, id, onClick}) => {
  const isLaptopOrSmaller = useMediaQuery("(max-width:1300px)");
  const isWithoutSidebar = useMediaQuery("(max-width:1024px)");
  return (
    <div 
        id={id} 
        className={`border border-gray-300 flex flex-col justify-center ${isLaptopOrSmaller ? isWithoutSidebar ? 'w-[268px]' : 'w-[200px]' : 'w-[268px]'} items-center cursor-pointer`}
        onClick={onClick}
    >
        <img src={require(`../assets/${picturePath}`)} alt={name} className={`w-full ${isLaptopOrSmaller ? 'h-[200px]' : 'h-[268px]'} object-cover`}/>
        <p className='text-center font-bold mt-4 hover:text-[#3ac596] transition duration-300'>{name}</p>
    </div>
  )
}

export default CategoryCard