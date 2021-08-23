
import {  Button, withStyles } from "@material-ui/core";
import React from 'react';
import { Link } from "react-router-dom";
import './styles.css'

const Banner = () => { 
  const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'white !important',
      height: 40,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);
  return (
  <div className="spinner three">
    <h3>No products in cart</h3>
    <StyledButton component={Link} to="/">Start shopping</StyledButton>
  </div>
  );
};

export default Banner;