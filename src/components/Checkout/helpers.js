import CheckoutForm from "./CheckoutForm";
import BookingDetails from "./BookingDetails";
import Confirmation from "./Confirmation";
import Payment from "./Payment";
import {
Paper,
  Container,
  CircularProgress,
} from "@material-ui/core";

export const renderRelatedComponent = ({
  user,
  orderInfo,
  orderError,
  totalPrice,
  bookingStep,
  handleChange,
  setTotalPrice,
  totalPriceWithCurrency,
  setTotalPriceWithCurrency,
  handleSubmit,
  checkoutData,
  handleBackStep,
  handleNextStep,
  handleCheckout,
  handleSelectChange,
}) => {
  switch (bookingStep) {
    case "order-address":
      return (
        <CheckoutForm
          user={user}
          orderInfo={orderInfo}
         
          checkoutData={checkoutData}
       
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleSelectChange={handleSelectChange}
        />
      );
    case "order-details":
      return (
        <BookingDetails
        user={user}
        checkoutData={checkoutData}
        setTotalPrice={setTotalPrice}
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        handleCheckout={handleCheckout}
        setTotalPriceWithCurrency={setTotalPriceWithCurrency}
        />
      );
    case "order-payment":
      return (
        <Payment
        user={user}
        totalPrice={totalPrice}
        checkoutData={checkoutData}
        handleBackStep={handleBackStep}
        handleNextStep={handleNextStep}
        handleCheckout={handleCheckout}
        totalPriceWithCurrency={totalPriceWithCurrency}
        />
      );
    case "confirmation":
      return orderInfo.customer?<Confirmation orderInfo={orderInfo} orderError={orderError} />: 
      <Container>
        <Paper className="paper" elevation={3}>
          <div className="products-spinner">
            <CircularProgress />
          </div>
        </Paper>
      </Container>
    
    default:
      return null;
  }
};