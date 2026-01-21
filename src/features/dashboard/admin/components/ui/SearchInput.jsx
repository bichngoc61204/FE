import React from 'react';
import { FiSearch } from "react-icons/fi";

export default function SearchInput({ value, onChange, placeholder = "Tìm kiếm...", className = "", style = {} }) {
  return (
    <div className={`filter search ${className}`} style={style}>
      <div className="filterLabel">
        <FiSearch /> Tìm kiếm
      </div>
      <input
        type="text"
        className="textInput"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
