import {  Button,withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import CustomCard from "../Cart";
import Spinner from "../Spinner";
import Banner from "../Banner";



import "./style.css";


const Basket = ({
  basketData,
  products,
  updateProduct,
  handleEmptyBasket,
  RemoveItemFromBasket,
}) => {
  const StyledButton3 = withStyles({
    root: {
      background: 'linear-gradient(60deg, #FFE253  10%, #EBB608 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white',
      height: 30,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

  const [showSpinner, setShowSpinner] = useState(true);
  const loading = () => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
    if (showSpinner) {
      return <Spinner />;
    }
    return <Banner />;
  };


  if (!basketData.line_items || !basketData.line_items.length) return loading();
  return (

        <div className="small-container2 cart-page">
            
           <table>
           <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                </thead>
                <tbody>
      
        {basketData.line_items.map((item) => {
          return (
                <CustomCard
                key={item.id}
                products={products}
                basket
                product={item}
                updateProduct={updateProduct}
                RemoveItemFromBasket={RemoveItemFromBasket}
              />
          );
        })}
        </tbody>
          </table>
          <div className="total-price">
              <table>
                  <tr>
                      <td>Total</td>
                     
        
            <td>{
                (basketData.subtotal &&
                  basketData.subtotal.formatted_with_symbol) ||
                "00.00"
              }    </td>
              </tr>
              <tr>
              <td>
              <StyledButton3
        
          onClick={handleEmptyBasket}
        >
          Empty Basket
        </StyledButton3>
    </td>
    <td>

        <Button
          size="small"
          color="secondary"
          className="remove2"
          variant="outlined"
          component={Link}
          to="/checkout"

        >
          Checkout
        </Button>
              </td>
        
      
                  </tr>
              </table>
          </div>
                </div>
               

  );
};

export default Basket;