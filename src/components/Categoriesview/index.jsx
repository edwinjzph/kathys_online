import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

const CategoriesView = ({ categorie }) => {
    return (
        <Link to={`/categories/${categorie.id}`} >
        <div  key={categorie.id} className="imagescat">
           <img  key={categorie.id} src={categorie.assets[0].url?categorie.assets[0].url:null} alt="Avatar"/>
           <h3 className="centered">{categorie.name}</h3>
           </div></Link>
    )
}
export default CategoriesView