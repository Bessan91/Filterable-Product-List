
import React, { useState } from "react";
import ProductList from "./components/ProductList"; 

const App = () => {
  //==============================Create the data =============================
  const products = [
    { name: "Laptop", category: "Electronics", price: 999 ,only: "Only 10 item left" },
    { name: "Smartphone", category: "Electronics", price: 699, only: "Only 20 item left" },
    { name: "Headphones", category: "Electronics", price: 199 ,only: "Only 30 item left" },
    { name: "Jeans", category: "Clothing", price: 49 ,only: "Only 2 item left"},
    { name: "T-shirt", category: "Clothing", price: 19 ,only: "Only 7 item left"},
    { name: "Jacket", category: "Clothing", price: 99, only: "Only 8 item left" },
    { name: "Photo Frames", category: "HomeDecor", price: 15 ,only: "Only 6 item left"},
    { name: "Childrens Room Decor", category: "HomeDecor", price: 200 ,only: "Only 11 item left"},
    { name: "Vases", category: "HomeDecor", price: 49 ,only: "Only 15 item left"},
    { name: "Prints", category: "HomeDecor", price: 10 ,only: "Only 18 item left" },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (category) => {
    setActiveFilter(category); 
  };

  // Filter products based on the active filter
  const filteredProducts =
    activeFilter === "All"? products: products.filter((product) => product.category === activeFilter);

  return (
    <div>
      <header>
        <h1>Product List</h1>
      </header>

      {/* ==========================  Proups =============== */}
      <ProductList
        products={filteredProducts}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default App;
