'use client';


export default function Input({handleChange, value, title, name}) {
  return (
    <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark"></span>{title}
    </label>
  );
}
