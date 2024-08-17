'use client';
import { IoBagAdd } from "react-icons/io5";
import Link from "next/link"; // Import Link from Next.js
import CartItems from "@/Components/cartItems/cartitem";
import Navbar from "@/Components/NavBar/Navbar";

export default function Cart() {
  return (
    <div>
      <Navbar></Navbar>
        <CartItems/>
    </div>
  );
}
