import Product from "../Product";
import { Grid, Container } from "@material-ui/core";
import './style.css';
import FullCategories from "../FullCategories";
import React from "react";








 
const Products = ({ products,addProduct,categories }) => {
    return (
        <div className="pto">

        <FullCategories/>
            <div >
            <Container id="products">
            <h2 className="title">New Arrivals</h2>
            <Grid container spacing={1}>
                    {products.slice(0,4).reverse().map(product => product.categories[0] && product.categories.map(idss => idss.id=== "cat_0egY5e0Z2o3QnA" && 
                
                         <Grid key={product.id} item xs={6} sm={6} md={3}>
                            <Product key={product.id}product={product}  />
                        </Grid>
                     
                    ))} 
                </Grid>
            </Container>
            </div>


       </div>
    )
}

export default Products;

