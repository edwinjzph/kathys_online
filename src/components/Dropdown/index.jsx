
import React, { useState,useEffect } from 'react'
import './style.css'

const Drop = ({ group ,selectoption}) => {
  const selectedvalue = group.options.map(option =>
        option.id)
        const[sizestate,setSizestate]=useState(selectedvalue[0]);
    const optionItems = group.options.map(option =>
    <option key={option.name} value={option.id}>{option.name}</option>
);
useEffect(() => {
      selectoption(group.id,sizestate)
}, [group.id,sizestate,selectoption]);
    return (
     
<select className="drop1"

onChange={(e)=>{
    const selectedsize= e.target.value;
      setSizestate(selectedsize)
}}
>
<option selected disabled>Size</option>
    {optionItems}
</select>

    )
}

export default Drop
