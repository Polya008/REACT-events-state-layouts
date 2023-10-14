import React from 'react';

export default function ShopCard({card}) {
  return (
    <div>
      <div className='card'>
      <img class='img_card' src = {card.img} alt={card.name}/>
      <span>{card.name}</span>
      <span>{card.color}</span>
      <div class='line'>

      <span>{`$${card.price}`}</span>
      <button>Add to cart</button>
      </div>
    </div>
    </div>
  );
}