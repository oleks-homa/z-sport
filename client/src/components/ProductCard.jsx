import React from 'react'

const ProductCard = ({name, picturePath, price, description, id, onClick}) => {
  return (
    <div 
        id={id} 
        className='border border-black flex flex-col justify-center items-center'
        onClick={onClick}
    >
        <img src={require(`../assets/${picturePath}`)} alt={name} className='w-[280px] h-[280px]'/>
        <p className='text-center font-bold mb-4'>{name}</p>
    </div>
  )
}

export default ProductCard