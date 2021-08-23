import Product from "../Product";
import { Grid, Container } from "@material-ui/core";
import Banner from "../Banner";
import './style.css';
import CategoriesView from "../Categoriesview";
import FullCategories from "../FullCategories";
import React from "react";
import FilterProduct from "../FilterProduct";
import { useHistory } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';



const Search = ({ products,addProduct,categories }) => {

    const [searchResult, setSearchResult] = React.useState([]);
    return (
        <div className="pto">
             
     <FilterProduct  addProduct={addProduct}
        categories={categories}
        searchResult={searchResult}
        setSearchResult={setSearchResult}/>

       </div>
    )
}

export default Search;



