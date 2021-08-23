import React, { useState, useEffect } from 'react';
import {
  List,
  ListItem,
  Button,
  Typography,
  ListItemText,
} from "@material-ui/core";


const BookingDetails = ({
  user,
  checkoutData,
  setTotalPrice,
  handleBackStep,
  handleNextStep,
  setTotalPriceWithCurrency,
}) => {

  const shippingCurrency = checkoutData.live.currency.code;
  const [totalShippingCost,setTotalshippingcost] = useState("");

  
  const selectoption2 =  () => {
    const shippingCost = user.shippingOptions[0].price.raw;
    const  itemsquantity = checkoutData.live.line_items.reduce((acc,product) => acc=acc+product.quantity,0)
    console.log(itemsquantity)
    if(itemsquantity<=2){
      setTotalshippingcost(shippingCost)
    }else{
      setTotalshippingcost(shippingCost*2)
    }
  };
  useEffect(() => {
   selectoption2();
      return () => {
        setTotalshippingcost({})}
    });

  const totalPrice = checkoutData.live.subtotal.raw + totalShippingCost;
  const totalPriceWithCurrency = `${totalPrice} ${shippingCurrency}`;

  setTotalPrice(totalPrice);
  setTotalPriceWithCurrency(totalPriceWithCurrency);

  return (
    <>
      <List>
        {checkoutData.live.line_items.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity}`}
            />
            <Typography variant="body2">
              {item.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem>
          <ListItemText primary="Shipping cost" />
          <Typography variant="body2">{`${totalShippingCost} ${shippingCurrency}`}</Typography>
        </ListItem>
        <ListItem>
          <ListItemText primary="Total price" />
          <Typography variant="body2">{totalPriceWithCurrency}</Typography>

      </ListItem>
    </List>

    <div className="actions">
        <Button
          size="medium"
          onClick={(e) => handleBackStep(e, "order-address")}
          variant="contained"
        >
          Go Back
        </Button>
        <Button
          onClick={(e) => handleNextStep(e, "order-payment")}
          size="medium"
          color="secondary"
          variant="contained"
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default BookingDetails;