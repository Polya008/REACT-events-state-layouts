import React from 'react';
import ShopItem from './ShopItem';

export default function ListView({items}) {
  return (
    <div className='list_view'>
      {items.map((item, index)=>{return <ShopItem key={index} item={item}/>})}
    </div>
  );
}