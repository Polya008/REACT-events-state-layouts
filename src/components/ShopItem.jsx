import React from 'react';

export default function ShopItem({item}) {
  return (
    <div className='line'>
      <img class='img_list' src = {item.img} alt={item.name}/>
      <span>{item.name}</span>
      <span>{item.color}</span>
      <span>{`$${item.price}`}</span>
      <button>Add to cart</button>
    </div>
  );
}