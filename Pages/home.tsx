// src/pages/Home.tsx

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/Components/NavBar/Navbar";
import styles from './Home.module.css';
import { FaArrowRight } from 'react-icons/fa';
import Buttons from "@/Components/buttons/buttons";
import { useRouter } from 'next/navigation'; // Import useRouter
import Footer from "@/Components/footer/footer";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = (brand) => {
    router.push(`/products?brand=${brand}`); // Navigate to products page with the brand as query parameter
  };

  return (
    <div className="app"> {/* Ensure this class is used to apply the layout styles */}
      <div className="content">
        <div className={styles['image-container']}>
          <img src="/images/begin-2.jpg" className={`img-fluid ${styles['full-width-img']}`} alt="" />
          <div className={styles['text-overlay']}>
            <p>New</p>
            <p>Collections</p>
            <p>For Everyone</p>
            <button type="button" className={`btn btn-danger ${styles['btn-curvy']}`}>Latest Collections <FaArrowRight /></button>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col text-center">
              <h2>About Us</h2>
              <div className={styles['short-hr-container']}>
                <hr className={styles['short-hr']} />
              </div>
              <p>Welcome to our store. We are dedicated to providing high-quality products and excellent customer service.</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <h2>Our Collections</h2>
              <div className={styles['short-hr-container']}>
                <hr className={styles['short-hr']} />
              </div>
              <div className="container text-center">
                <div className="row">
                  <div className="col-md-6 col-lg-3 mb-4">
                    <div className={styles['image-item']}>
                      <img src="https://thumbs.dreamstime.com/b/web-183282273.jpg" alt="Nike" />
                      <div className={styles.overlay}>
                        <Buttons onClickHandler={() => handleButtonClick('Nike')} value="Nike" title="Nike" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-4">
                    <div className={styles['image-item']}>
                      <img src="https://thumbs.dreamstime.com/b/adidas-sport-clothing-brand-logo-editorial-image-vinnitsia-ukraine-june-222082589.jpg" alt="Adidas" />
                      <div className={styles.overlay}>
                        <Buttons onClickHandler={() => handleButtonClick('Adidas')} value="Adidas" title="Adidas" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-4">
                    <div className={styles['image-item']}>
                      <img src="https://c8.alamy.com/comp/2KE4WTB/vinnitsa-ukraine-october-25-2022-puma-sport-brand-logo-icon-vector-editorial-illustration-2KE4WTB.jpg" alt="Puma" />
                      <div className={styles.overlay}>
                        <Buttons onClickHandler={() => handleButtonClick('Puma')} value="Puma" title="Puma" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 mb-4">
                    <div className={styles['image-item']}>
                      <img src="https://i.pinimg.com/736x/dc/03/89/dc03893a0baf50b2efbdede6350e4d67.jpg" alt="Vans" />
                      <div className={styles.overlay}>
                        <Buttons onClickHandler={() => handleButtonClick('Vans')} value="Vans" title="Vans" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
