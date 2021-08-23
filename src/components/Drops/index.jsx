
import React, { useState,useEffect } from 'react'
import './style.css'

const Drops = ({ group ,selectoption2}) => {
  const selectedvalue = group.options.map(option =>
        option.id)
        const[sizestate,setSizestate]=useState(selectedvalue[0]);
    const optionItems = group.options.map(option =>
    <option key={option.name} value={option.id}>{option.name}</option>
);
useEffect(() => {
      selectoption2(group.id,sizestate)
}, [group.id,sizestate,selectoption2]);
    return (
      
<select className="drop2"
onChange={(e)=>{
    const selectedsize= e.target.value;
      setSizestate(selectedsize)
}}
>
<option selected disabled>Colour</option>
    {optionItems}
</select>

 
    )
}

export default Drops