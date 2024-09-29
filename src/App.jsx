
import React, { useState } from "react";
import ProductList from "./components/ProductList"; 

const App = () => {
  //==============================Create the data =============================
  const products = [
   
    { name: "Smartphone", category: "Electronics", price: 699, only: "Only 20 item left" },
    { name: "Headphones", category: "Electronics", price: 199 ,only: "Only 30 item left" },
    { name: "Jacket", category: "Clothing", price: 99, only: "Only 8 item left" },
  
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
  <h2>Flop<span>Market</span></h2>
  <div>
    <h2 className="SignIn">SignIn</h2>
    <h2 className="SignUp">SignUp</h2>
  </div>
</header>
<div className="container">
<div className="intro">
<h2>Flop<span>Market</span></h2>
<p className="lorem">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectuso eaque  natus. Ipsam aliquam dolor nihil laborum ducimus, reprehenderit nemo expedita, incidunt dolorum, quaerat laboriosam. dolor sit amet consectetur adipisicing elit. Delectus rerum optio tenetur, distinctio eaque doloremque ad natus. Ipsam aliquam dolor nihil laborum ducimus, reprehenderit nemo expedita, incidunt dolorum, quaerat laboriosam.</p>
</div>

<div className="catagory">
      {/* ==========================  Proups =============== */}
      <ProductList
        products={filteredProducts}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      </div>
    </div>
    <footer class="footer">
  <h3>Let's Connect ::</h3>
</footer>

    </div>
  );
};

export default App;
