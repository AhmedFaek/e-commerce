
'use client';
import products from "@/DataBase/data";
import Card from "../Card/card";
import "@/Components/relatedProducts/relatedProducts.css";

export default function Related({ company }) {
  const filteredProducts = products.filter(product => product.company === company);

  return (
    <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
            {filteredProducts.map(product => (
                <Card
                    key={product.id}
                    id={product.id}
                    img={product.img}
                    title={product.title}
                    prevPrice={product.prevPrice}
                    newPrice={product.newPrice}
                />
            ))}
        </div>
        <br/>
    </div>
  );
}
