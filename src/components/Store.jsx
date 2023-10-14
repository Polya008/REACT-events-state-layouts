import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import products from '../files';
import ListView from './ListView';
import CardView from './CardView';

export default function Store() {
    const [state, setState]= useState('view_list');
  return (
    <div>
     <IconSwitch icon={state} onSwitch={setState}/>
     {state==='view_list'? (
        <ListView items={products}/>
     ): ( <CardView cards={products}/>)}
    </div>
  );
}