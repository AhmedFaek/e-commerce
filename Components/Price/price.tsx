'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./price.css"
import Input from "../input/input";



export default function Price({handleChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>ALL
      </label>

      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - $50"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="test2"
      />      
      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
}
