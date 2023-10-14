import React from 'react';

export default function IconSwitch({icon, onSwitch}) {
  return (
    <div>
      <button  onClick={()=>{
        icon==='view_module'? onSwitch('view_list'):onSwitch('view_module')}}>

      <span className={'material-icons'}>{icon}</span>
      </button>
    </div>
  );
}