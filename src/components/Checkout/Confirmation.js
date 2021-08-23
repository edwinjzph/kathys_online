import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


const Confirmation = ({ orderInfo, orderError }) => {
  if (orderError) {
    return (
      <div className="confirmation">
        <Typography variant="h5">Error: {orderError}</Typography>
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </div>
    );
  }
  return (
    <div className="confirmation">
      <Typography variant="h5">
        Thank you {orderInfo.customer.firstname} {orderInfo.customer.lastname}{" "}
        for your purchase!
      </Typography>
      <Typography variant="subtitle2">Check your mail for invoice.</Typography>
      <Typography variant="subtitle2">Order id: {orderInfo.id}</Typography>
      <Typography variant="subtitle2">Order ref: {orderInfo.customer_reference}</Typography>
      <Button component={Link} variant="contained" type="button" to="/">
        Continue shopping
      </Button>
    </div>
  );
};

export default Confirmation;