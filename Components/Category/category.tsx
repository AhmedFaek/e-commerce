'use client';
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./category.css"
import Input from "../input/input";


export default function Category({handleChange}) {
  return (
    <div>
        <h2 className="sidebar-title">Category</h2>
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>ALL
          </label>

          <Input 
            handleChange={handleChange}
            value="sneakers"
            title="Sneakers"
            name="test"
          />
          <Input 
            handleChange={handleChange}
            value="flats"
            title="Flats"
            name="test"
          />
          <Input 
            handleChange={handleChange}
            value="sandals"
            title="Sandals"
            name="test"
          />
          <Input 
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          />
        </div>
    </div>
  );
}
