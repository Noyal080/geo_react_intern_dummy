import React, { useState, useEffect } from "react";

const DataPersistence = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from localStorage when component mounts
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage when it changes
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);

  const handleAddData = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div>
      <h1>Data Persistence</h1>
      <button onClick={() => handleAddData("New Data")}>Add Data</button>
      <ul>
        {data.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataPersistence;
