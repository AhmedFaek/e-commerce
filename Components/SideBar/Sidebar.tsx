'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sidebar.css";
import { CiShoppingCart } from "react-icons/ci";
import Category from "../Category/category";
import Price from "../Price/price";


export default function Sidebar({handleChange}) {
  return (
    <section className="sidebar">
        <div className="logo-container">
            <h2> <CiShoppingCart /> </h2>
        </div>

        <Category handleChange={handleChange}  />
        <Price    handleChange={handleChange} />

    </section>
  );
}
