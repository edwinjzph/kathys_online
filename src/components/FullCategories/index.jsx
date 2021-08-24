import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";
import img1 from './images/salwar.jpg';
import img2 from './images/kurthis.jpeg';
import img3 from './images/saree.jpg';
import img4 from './images/kids.jpg';
import img5 from './images/homedecor2.jpg';
import { Grid, Container } from "@material-ui/core";

const FullCategories = () => {

    return (
        <div className="cate">
        <Container id="categories1">
        <h2 className="title">Categories</h2>
            <Grid component={Link} to={`/categoriesview/${"salwar"}`}  container spacing={.8}>
                     <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="salwar" src={img1}/>
           <h2 className="centered">Salwar Sets</h2>
           </div>
           </Grid>
           <Grid component={Link} to={`/categoriesview/${"sarees"}`} item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="sarees" src={img3}/>
           <h2 className="centered">Sarees</h2>
           </div>
           </Grid>
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="fabrickurthis" src={img2}/>
           <h2 className="centered">Fabrics Kurthis</h2>
           </div>
           </Grid>   
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="kidswear" src={img4}/>
           <h2 className="centered">Kids Wear</h2>
           </div>
           </Grid>    
           <Grid  item xs={6} sm={6} md={3}>
                     <div   className="imagescat">
           <img alt="dj" src={img5}/>
           <h2 className="centered">Home Decors</h2>
           </div>
           </Grid>  
            </Grid>
        </Container>
        
        </div>
      
    )
}
export default FullCategories