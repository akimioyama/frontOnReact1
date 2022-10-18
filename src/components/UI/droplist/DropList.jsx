import React from "react";
// import { useState } from "react";
import cl from "./DropList.module.css";
import "../../../styles/App.css";

const DropList = ({ defaultValue, data, value, onChange, ...props }) => {
  // const [sitis, setSitis] = useState()
  return (
    <select 
    value={value} 
    {...props} 
    className={cl.DropList} 
    onChange={event => onChange(event.target.value)}
    >
      <option value={defaultValue}>{defaultValue}</option>
      {data.map((temp) => (
        <option key={temp} value={temp}>
          {temp}
        </option>
      ))}
    </select>
  );
};

export default DropList;
