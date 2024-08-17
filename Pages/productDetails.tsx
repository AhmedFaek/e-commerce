import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import products from '@/DataBase/data';
import Navbar from '@/Components/NavBar/Navbar';
import Image from 'next/image';
import styles from './ProductDetails.module.css';
import { FaCartPlus } from 'react-icons/fa';
import Description from '@/Components/description/description';
import Footer from '@/Components/footer/footer';
import Related from '@/Components/relatedProducts/relatedProducts';
import { useCart } from "react-use-cart";


interface Product {
  id: number;
  img: string;
  title: string;
  prevPrice: string;
  newPrice: string;
  color: string;
  sizes: string[];
  company: string;
}

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');

  const { addItem } = useCart();

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id.toString() === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        console.error('Product not found');
      }
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value);
  };

  const item = {
    id: product.id.toString(),
    img: product.img,
    title: product.title,
    price: parseFloat(product.newPrice),
    color: product.color,
    sizes: product.sizes,
    company: product.company,
  };

  

  return (
      <div className="app">
        <Navbar />
        <div className="content">
          <div className={`container my-4 ${styles.container}`}>
            <div className={styles.imageWrapper}>
              <Image src={product.img} alt={product.title} width={500} height={500} className={styles.image} />
            </div>
            <div className={styles.detailsWrapper}>
              <h1 className={styles.title}>{product.title}</h1>
              <p className={styles.price}>
                <span className={styles.previousPrice}>{product.prevPrice}</span> ${product.newPrice}
              </p>
              <p className={styles.color}><strong>Color:</strong> {product.color}</p>
              <div className="mb-3">
                <strong className={styles.color}>Select Size:</strong>
                <select
                  className={`form-select ${styles.sizeDropdown}`}
                  value={selectedSize}
                  onChange={handleSizeChange}
                >
                  <option value="">Choose...</option>
                  {product.sizes.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <button
              type="button"
              className={`btn ${styles.button}`}
              onClick={() => {
                if (selectedSize) {
                  addItem(item);
                } else {
                  alert('Please select a size.');
                }
              }}
              disabled={!selectedSize}
            >
              <FaCartPlus className={styles.icon} /> Add To Cart
            </button>
            </div>
          </div>
          <Description />
          <Related company={product.company} />
          <br />
        </div>
        <Footer />
      </div>
  );
};

export default ProductDetails;
