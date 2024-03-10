import React from 'react'
import { CDN_URL } from '../utils/constants';
const Itemlist = ({items}) => {
  
  console.log(items);
  return (
    
      <div>
        {items.map((item)=>(
        <div key={item.card.info.id} className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
         
          <div>
            <div className='py-2'>
            <span>{item.card.info.name}</span>
            <span>-{" "} ₹ {" "}{item.card.info.price?
                        item.card.info.price/100
                      : item.card.info.defaultPrice/100}
                      </span>
            </div>
            <p className='text-xs'>{item.card.info.description}</p>
          </div>
          <div> <img src={CDN_URL + item.card.info.imageId} className='h-20 w-20'/></div>
      </div>
      ))}
    </div>
  )
}

export default Itemlist;
