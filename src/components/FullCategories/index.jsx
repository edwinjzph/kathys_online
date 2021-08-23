import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
import img1 from './images/6.PNG';
import { Grid, Container } from "@material-ui/core";

const FullCategories = () => {

    return (
        <div className="cate">
        <Container id="categories1">
        <h2 className="title">Categories</h2>
            <Grid component={Link} to={`/categoriesview/${"salwar"}`}  container spacing={1}>
                     <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="salwar" src={img1}/>
           <h3 className="centered">Salwar Sets</h3>
           </div>
           </Grid>
           <Grid component={Link} to={`/categoriesview/${"sarees"}`} item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="sarees" src={img1}/>
           <h3 className="centered">Sarees</h3>
           </div>
           </Grid>
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="fabrickurthis" src={img1}/>
           <h3 className="centered">Fabrics Kurthis</h3>
           </div>
           </Grid>   
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="kidswear" src={img1}/>
           <h3 className="centered">Kids Wear</h3>
           </div>
           </Grid>    
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="dj" src={img1}/>
           <h3 className="centered">Home Decors</h3>
           </div>
           </Grid>  
            </Grid>
        </Container>
        
        </div>
      
    )
}
export default FullCategories