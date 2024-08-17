'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/Components/NavBar/Navbar";
import Sidebar from "@/Components/SideBar/Sidebar";
import Recommended from "@/Pages/recommended";
import { useState, useEffect } from "react";
import products from "@/DataBase/data";
import React from "react";
import Card from "@/Components/Card/card";
import { useSearchParams } from 'next/navigation'; // Import useSearchParams
import Link from "next/link"; // Import Link from Next.js
import "/Pages/products.css";
import Footer from "@/Components/footer/footer";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const searchParams = useSearchParams(); // Use this to read query parameters

  useEffect(() => {
    const brand = searchParams.get('brand'); // Get the 'brand' query parameter
    if (brand) {
      setSelectedCategory(brand);
    }
  }, [searchParams]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected) {
    let filteredProducts = products;
  
    if (selected) {
      filteredProducts = filteredProducts.filter(({ category, company }) =>
        category === selected || company === selected
      );
    }
  
    return filteredProducts.map(({ id, img, title, prevPrice, newPrice, company }) => (
      <Card
        key={id}
        id={id}
        img={img}
        title={title}
        prevPrice={prevPrice}
        newPrice={newPrice}
        company={company}
      />
    ));
  }

  const result = filteredData(products, selectedCategory);

  return (
    <div>
      <Navbar />
      <Sidebar handleChange={handleChange} />
      <Recommended handleClick={handleClick} />
      <section className="card-container">
        {result}
      </section>
      <Footer />
    </div>
  );
}
