'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./recommended.css";
import Buttons from "@/Components/buttons/buttons";



export default function Recommended({handleClick}) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons 
          onClickHandler={handleClick}
          value=""
          title="All Products"
        />        
        <Buttons 
          onClickHandler={handleClick}
          value="Nike"
          title="Nike"
        />
        <Buttons 
          onClickHandler={handleClick}
          value="Adidas"
          title="Adidas"
        />        
        <Buttons 
          onClickHandler={handleClick}
          value="Puma"
          title="Puma"
        />
        <Buttons 
          onClickHandler={handleClick}
          value="Vans"
          title="Vans"
        />   


      </div>
    </div>
  );
}
