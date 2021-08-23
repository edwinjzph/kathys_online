

import React, { useState } from 'react'
import "./style"


const Images = ({ images,seturl }) => {
      const[id,setId]=useState();
      console.log("ggggg",id)


  return (
        <div className="small-img-col">
              <img className="imagesmall"  style={{
                  backgroundColor: images.id === id ? "red" : ""
                }}         onClick={() => {
                  seturl(images.url)
                  setId(images.id);
                }} alt={images.id} src={images.url}/>
              </div>
    )
}
export default Images
