import Product from "../Product";
import { Grid, Container } from "@material-ui/core";
import Banner from "../Banner";
import './style.css';
import CategoriesView from "../Categoriesview";
import FullCategories from "../FullCategories";
import { useState,useEffect } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from "react-router-dom";

const SelectedCategories = ({ products,addProduct,categories }) => {
    const ids = window.location.pathname.split("/");  
    const[id,setId]=useState(ids[2]);
    useEffect(() => {
          const ids = window.location.pathname.split("/");  
          setId(ids[2])
        },[]);
        console.log(id)
        let history = useHistory();
    return (
        <div className="pto">
            <div className="cate">
            <Container id="categories2">
            <h2 className="title">Shop {id}</h2>
<BsArrowLeft onClick={() => history.goBack()} className="backsvg"/>
                <Grid container spacing={1}>
                    {categories.map(groups => groups.meta.sub===id &&
                         <Grid key={groups.id} item xs={6} sm={6} md={3}>
                            <CategoriesView key={groups.id} categorie={groups}  />
                        </Grid>
                    )}
                </Grid>
            </Container> 
            </div>
        </div>
    )
}

export default SelectedCategories;

