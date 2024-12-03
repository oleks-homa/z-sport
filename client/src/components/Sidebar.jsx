import React from 'react'

const Sidebar = ({data}) => {
  return (
    <div>
        {data.map(category => (
            <div className='p-4'>
                <h2 class="font-bold text-[14px] mb-2 cursor-pointer">{category.name}</h2>
                <ul class="space-y-2 text-sm">
                    {category.subcategories.map(subcat => (
                        <>
                            <li class="text-[14px] transition duration-500 text-[#666] hover:text-green-300 ml-2 border-b border-gray-300 cursor-pointer">→ {subcat}</li>
                        </>
                    ))}
                </ul>
            </div>
        ))}
    </div>
  )
}

export default Sidebar