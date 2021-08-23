import {

    Typography,

    Button,
  } from "@material-ui/core";

  import './style.css'
  import { useEffect } from "react";
  import {Link }from 'react-router-dom';


 
  
  const CustomCard = ({
    basket,
    product,
    addProduct,
    products,
    updateProduct,
    RemoveItemFromBasket,
  }) => {
 
    const dd =   product.variant.inventory;
  useEffect(() => {
    if(product.quantity> product.variant.inventory){
      let minus = product.quantity-dd
      updateProduct(product.id, product.quantity - minus);
    }
  }, [dd,product.quantity,product.variant.inventory,product.id]);
   const optionname = product.selected_options.map(group =>
      group.option_name
    )
    return (

            <tr>
                <td
                ><div className="cart-info">
                     <Link key={product.product_id} to={`product-view/${product.product_id}`}> <img src={product.media.source} alt="me"></img></Link>
                    <div>
                        <p>{product.name}</p>
                        <small>Price: <span className="price">{product.price.formatted_with_symbol}</span>  <br></br>Colour: {optionname[0]} <br></br>Size: {optionname[1]}</small>
                        <br></br>
                        {basket && (
            <>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => {
                  RemoveItemFromBasket(product.id);
                }}
              >
                    Remove
              </Button>
                      </>
          )}
         
                    </div>
                 
                </div>
                </td>
                <td >        {basket && (
            
              <div className="qwe">
                <Button
                  size="small"
                  disabled={dd<=product.quantity}
                  variant="outlined"
                  className="increase-product-quantity"
                  onClick={() => {
                    updateProduct(product.id, product.quantity + 1);
                  }}
                >
                  +
                </Button>
                <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
                <Button
                  size="small"
                  color="secondary"
                  variant="outlined"
                  onClick={() => {
                    updateProduct(product.id, product.quantity - 1);
                  }}
                >
                  -
                </Button>
              </div>
            
          )}</td>
                <td>{product.line_total.formatted_with_symbol}</td>
            </tr>
         

    );
  };
  
  export default CustomCard;