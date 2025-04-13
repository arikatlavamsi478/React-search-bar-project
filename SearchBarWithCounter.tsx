import React, { useState, ChangeEvent } from "react";
import { fruits } from "../data/fruits";

const SearchBarWithCounter: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const filteredFruits = fruits.filter(fruit =>
    fruit.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px", marginBottom: "10px" }}
      />
      <p>Results Found: {filteredFruits.length}</p>
      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBarWithCounter;
