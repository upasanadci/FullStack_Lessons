import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
    
  const [data, setData] = useState("Initial Data");
  const [number, setNumber] = useState(0);

  const updateData = (newData) => {
    setData(newData);
  };

  const updateNum = () => {
    setNumber(number + 1);
  };

  return (
    <MyContext.Provider value={{ data, number, updateData, updateNum }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
