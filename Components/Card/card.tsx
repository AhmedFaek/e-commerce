'use client';
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link";
import { CartProvider, useCart } from "react-use-cart";

export default function Card({ id, img, title, prevPrice, newPrice }) {
  return (
    
      <Link href={`/productDetails?id=${id}`} passHref>
        <section className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-details">
            <h3 className="card-title">{title}</h3>
            <section className="card-price">
              <div className="price">
                <del>{prevPrice}</del> {newPrice}
              </div>
              <div className="bag">
                <IoBagAdd className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </Link>
  );
}
