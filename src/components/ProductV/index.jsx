import {  Button, Typography,withStyles } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { commerce } from "../../lib/commerce";
import React, { useState, useEffect } from "react";
import Spinner from "../Spinner";
import "./style.css";
import CursorZoom from  'react-cursor-zoom'
import Drop from "../Dropdown";
import { Grid, Container } from "@material-ui/core";
import Drops from "../Drops";
import Relatedproducts from "../Relatedproducts";
import { Link } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import { useHistory } from "react-router-dom";

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
const StyledButton2 = withStyles({
  root: {
    background: '#ebb608',
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
const StyledButton3 = withStyles({
  root: {
    background: '#ebb608',
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


const createMarkup = (text) => {
    return { __html: text };
  };
  
const ProductView = ({  addProduct, updateProduct, RemoveItemFromBasket }) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectoptions, setSelectoptions] = useState([]);
  const [selectcolour, setSelectcolour] = useState([]);
  const [varent, setVarient] = useState([]);
  const [selecturl, setSelecturl] = useState([]);
  const [selectvariant, setSelectvariant] = useState([]);
  const [selectvariant2, setSelectvariant2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ stateImage, setStateImage ] =useState(false);
  let history = useHistory();
const _ = require('lodash');
  const[ids,setId]=useState();
  console.log("onnw",ids)
  const fetchProduct = async (id) => {
    const response = await commerce.products.retrieve(id);
    const responses = await commerce.products.getVariants(id)
    const final = responses.data
    setVarient(final);
    console.log({ response });
    const { name, price, media, quantity, description,variant_groups,assets,related_products,inventory} = response;
    setProduct({
        id,
      name,
      inventory,
      quantity,
      related_products,
      assets,
      description,
      variant_groups,
      src: media.source,
      price
    });
  };

  
  
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
      const selectoption = async (variantid,optionid) => {
      setSelectvariant(variantid)
      setSelectoptions(optionid)
    };

  const selectoption2 = async (variantid,optionid) => {
    setSelectvariant2(variantid)
    setSelectcolour(optionid)
  };  
  const seturl = async (url) => {
    setStateImage(true);
  setSelecturl(url)
  }
  const kkk=varent.map(options=> options.options)
  const options= {
    [selectvariant]:selectoptions,
    [selectvariant2]:selectcolour

  }
  useEffect(() => {
  setLoading(true);
    const id = window.location.pathname.split("/");
    fetchProduct(id[2]).finally(() => {
      setLoading(false);
    });
    return () => {
      setProduct({})}
  }, []);
  const handleQuantity = (param) => {
    if(param === "decrease" && quantity > 1){
        setQuantity(quantity - 1);
    }
    if(param === "increase" && quantity < 10){
      setQuantity(quantity + 1);
  }

}
if (loading) {
  return   <Spinner />
}
  return (
      <div className="small-container single-product"  >
 
          <div className="row" >
     
              <div className="col-2 images" key={product.id}>  
              <BsArrowLeft onClick={() => history.goBack()} className="backsvg2"/>
            <CursorZoom
            key={product.id}
                 onLoad={() => {
                  setLoading(false);
                }}  
                image={{
                    src:  stateImage ? selecturl : product.src ,
                    width: 300,
                    height: 400
                }}
                zoomImage={{
               
                    src: stateImage ? selecturl : product.src ,
                    width: 300,
                    height: 400
                }}
                cursorOffset={{ x: 80, y: -80 }}
            />
          <div className="small-img-row">
    
           {product.assets.map((product) => 
                                 <div className="small-img-col">
                                 <img className="imagesmall"
                                 style={{
                                  border: product.id === ids ? "3px solid #ebb608" : ""
                                }}         
                                  onClick={() => {
                                    console.log(product.id)
                                    setId(product.id);
                                     seturl(product.url)
                                   }} key={product.id} alt={product.id} src={product.url}/>
                                 </div>)}     
          </div>
              </div>
              <div className="col-2">
             <p>Home/{product.name}</p>
             <h2>{product.name}</h2>
           
           <div className="linear">
             {product.variant_groups.map((group) => {
                        return (
                          group.name==='Size' ? (
                            <Drop key={group.id} group={group} selectoption={selectoption}  />
                            ) : (
                           <Drops key={group.id} group={group} selectoption2={selectoption2} />
                            )
                           )
                    })}
   </div>
       
                  {kkk.map((value,index) => _.isEqual(value,options) ?    <React.Fragment>
                    <h3>{varent[index].price===null ? product.price.formatted_with_symbol : varent[index].price.formatted_with_symbol}</h3>
                    <h4>Quantity</h4>
                    <Typography variant="h5" >Only <span className="left"> {varent[index].inventory}</span> left</Typography>
                
                  <div className="buttons">
           
           <StyledButton3
             size="small"
             variant="contained"
             className="increase-product-quantity"
             onClick={() => {
              handleQuantity(varent[index].inventory>quantity?"increase":"no");
             }}
           >
             +
           </StyledButton3>
      
           <h5 className="quan">{quantity}</h5>
    
           <StyledButton2
             size="small"
             color="secondary"
             variant="contained"
             onClick={() => {
         handleQuantity("decrease")
             }}
           >
             -
           </StyledButton2>
           </div>
                      
           <StyledButton
                    size="medium"
                    component={Link}
                    to="/basket"
                    disabled={varent[index].inventory<1}
                    onClick={() => {
                        addProduct(product.id,quantity,varent[index].id
                        );
                    }}
                >
                    <ShoppingCart /> Add to basket
                </StyledButton>
                <h3>Product Details</h3>
                <Typography
        
            dangerouslySetInnerHTML={createMarkup(product.description)}
          />
                  </React.Fragment>:""
              )}
        
         
  
              </div>

          </div>
    
        <Container height="100px" id="products">
        <h2>Related products</h2>
                <Grid container spacing={1}>
                    {product.related_products.map(producted => {
                        return <Grid key={producted.id} item xs={6} sm={6} md={3}>
                            <Relatedproducts key={producted.id} product={producted} addProduct={addProduct} />
                        </Grid>
                    })}
                </Grid>
            </Container>
      </div>
  
  
  );
};

export default ProductView;
