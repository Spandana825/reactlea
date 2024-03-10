import React from 'react'
import Itemlist from './Itemlist'

const RestoCategories = ({data}) => {
    console.log(data)
  return (
    <div>
      <div className='w-6/12 mx-auto  my-4 bg-gray-50 shadow-lg p-4'>
        <div className=' flex justify-between'>
     <span className='font-bold text-lg'>{data.title}({data.itemCards.length})</span>
    <span>⮟</span>
    </div>
    <Itemlist items={data.itemCards}/>
    </div>

    </div>
  )
}

export default RestoCategories;
