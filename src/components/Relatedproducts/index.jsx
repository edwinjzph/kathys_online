import React from 'react'
import "./style.css";
import {Link }from 'react-router-dom';


const Relatedproducts= ({product,addproduct}) => {
    const createMarkup = (text) => {
        return { __html: text };
      };
      function truncate(string,n){
        return string?.length>n ? string.substr(0,n-1)+'....' : string;
    }
    return (
        <div  className="col-4">
             <Link  to={`/product-view/${product.id}`}  onClick={() => window.location.href=`/product-view/${product.id}`} > 
            <img  alt={product.name} src={product.media.source}/> </Link>
            <h4>{product.name}</h4>
            <p
        dangerouslySetInnerHTML={createMarkup(truncate(product.description,50))}
      />
                <div className="row7">
            <p className="prices">{product.price.formatted_with_symbol}</p>
            <span className="soldout">{product.quantity===0&&"Sold Out"}</span>
            </div>
        </div>
    )
}
export default Relatedproducts

