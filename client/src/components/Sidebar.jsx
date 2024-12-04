import React from 'react'

const Sidebar = ({data}) => {
  return (
    <div>
        {data.map(category => (
            <div className='p-4'>
                <h2 className="font-bold text-[14px] mb-2 cursor-pointer hover:text-[#3ac596] transition duration-300">{category.name}</h2>
                <ul className="space-y-2 text-sm">
                    {category.subcategories.map(subcat => (
                        <>
                            <li className="text-[14px] text-[#666] ml-2 border-b border-gray-300 cursor-pointer">→ <span className=" hover:text-[#3ac596] transition duration-300">{subcat}</span></li>
                        </>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Sidebar