'use client';
import { IoBagAdd } from "react-icons/io5";

export default function Buttons({onClickHandler, value, title}) {
  return (
    <button type="button" onClick={onClickHandler} value={value} className="btn btn-outline-primary btn-custom">{title}</button>
  );
}
