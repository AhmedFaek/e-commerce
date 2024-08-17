import Image from "next/image";
import styles from "/pages/login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "react-use-cart"; // Import the useCart hook

export default function Navbar() {
  const [menu, setMenu] = useState("home");
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const {
    totalItems, // Access totalItems from useCart
  } = useCart();

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const closeModal = () => {
    setShowRegisterModal(false);
    setShowLoginModal(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">
          <Image
            src="/images/logo-removebg-preview.png"
            alt="Navbar Logo"
            width={150}
            height={60}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "home" ? "active" : ""}`}
                href="/"
                onClick={() => setMenu("home")}
                style={{ fontSize: "1.25rem" }}
              >
                Home {menu === "home" ? <hr /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "Products" ? "active" : ""}`}
                href="/products"
                onClick={() => setMenu("Products")}
                style={{ fontSize: "1.25rem" }}
              >
                Products {menu === "Products" ? <hr /> : null}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "Contact" ? "active" : ""}`}
                href="/contact"
                onClick={() => setMenu("Contact")}
                style={{ fontSize: "1.25rem" }}
              >
                Contact {menu === "Contact" ? <hr /> : null}
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          {/* Button to toggle login modal */}
          <button className="btn btn-outline-primary me-2" onClick={toggleLoginModal}>
            Login
          </button>
          <button className="btn btn-outline-success me-2" onClick={toggleRegisterModal}>
            Register
          </button>
          <Link href="/cart" className="d-flex align-items-center me-2 position-relative">
            <i className="bi bi-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
              </svg>
            </i>
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
                <span className="visually-hidden">unread messages</span>
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className={`${styles.modalOverlay} d-flex justify-content-center align-items-center`}>
          <div className={`${styles.modalContent} p-5 rounded bg-light`}>
            <button className="btn-close" onClick={closeModal}></button>
            <form>
              <h3 className="mb-4">Sign In</h3>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
              <p className="text-right mt-3">
                Forgot <a href="#">Password?</a> |{' '}
                <button type="button" className="btn btn-link p-0" onClick={openRegisterModal}>
                  Create an Account
                </button>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegisterModal && (
        <div className={`${styles.modalOverlay} d-flex justify-content-center align-items-center`}>
          <div className={`${styles.modalContent} p-5 rounded bg-light`}>
            <button className="btn-close" onClick={closeModal}></button>
            <form>
              <h3 className="mb-4">Create Account</h3>
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input type="text" className="form-control" id="lastName" placeholder="Enter Last Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" required />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Create
                </button>
              </div>
              <p className="text-right mt-3">
                Already have an account?{' '}
                <button type="button" className="btn btn-link p-0" onClick={openLoginModal}>
                  Sign in
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}
