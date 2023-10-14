import React from 'react';
import ShopCard from './ShopCard';

export default function CardView({cards}) {
  return (
    <div className='card_view'>
      {cards.map((card, index)=>{return <ShopCard key={index} card={card}/>})}
    </div>
  );
}