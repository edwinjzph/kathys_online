import Product from "../Product";
import { Grid, Container } from "@material-ui/core";
import './style.css';
import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import {  Button } from "@material-ui/core";
import Spinner from "../Spinner";
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from "react-router-dom";





const Categories = ({categories }) => {

    const ids = window.location.pathname.split("/");  
    const[id,setId]=useState(ids[2]);
    const [pages, setPages] = useState(1);
    const [categoriess, setCategoriess] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let history = useHistory();



    const fetchCategories =  async () => {
      const response = await commerce.categories.retrieve(id);
      setCategoriess(response);
      pagess(response.products)
    }
    const pagess =  (pages) => {
        const pagesint=  parseInt(pages)
        if(Math.floor(pagesint/20)<1){
           setPages(1)
        }else{
            setPages(Math.floor(pagesint/20))
        }
            }
    const handleQuantity = (param) => {
        if(param === "decrease" && quantity > 1){
        
                setQuantity(quantity - 1)      
        }
        if(param === "increase" && quantity < pages){
           
                setQuantity(quantity + 1)
      }
    }


    useEffect(() => {
        setLoading(true);
        const fetchProducts = async () => {
            const response = await commerce.products.list({
              limit: 4,
              page: quantity,
            })
            setProducts((response && response.data) || []);  
          }
       
          const ids = window.location.pathname.split("/");  
          setId(ids[2])
     fetchCategories();
     fetchProducts().finally(() => {
    
        setLoading(false);
      });
     return () => {
         setProducts({})
        setCategoriess({})
        setId({})
      }
        }, [quantity]);
        if (loading) {
            return   <Spinner />
          }
    return (
        
        <div className="pto">
            <div >
            <Container id="products">
            <div className="row3">
        <BsArrowLeft onClick={() => history.goBack()} className="backsvg2"/>
                <h2>{categoriess.name}</h2>
                <p>{categoriess.products} Products</p>
            </div>
          
                <Grid container spacing={1}>
                    {products.slice().reverse().map(product => product.categories[0] && product.categories.map(idss => idss.id=== id && 
                
                         <Grid key={product.id} item xs={6} sm={6} md={3}>
                            <Product key={product.id}product={product}  />
                        </Grid>
                     
                    ))}
                       <div className="page-btn">
                <Button   size="small" onClick={() =>{handleQuantity("decrease")}} >Previous page</Button>
                <p>{quantity}-{pages} Page</p>
                <Button   size="small"  onClick={() =>{handleQuantity("increase")}}>Next page</Button>
            </div>
                     
                </Grid>

            </Container>
        

            </div>
         
        </div>
    )
}

export default Categories;