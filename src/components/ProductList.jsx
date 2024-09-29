// ProductList.js
import React from "react";
import './style.css';

const ProductList = ({ products, activeFilter, onFilterChange }) => {
  return (
    <div className="filter">
      {/* Filter Section */}
      <section id="filter-section">
        <p className="Filter_category">Filter Products</p>
        
        {/* Filter Buttons */}
        {/* =============== Filter All ============ */}
        <button
          className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => onFilterChange('All')} >  All  </button>
         
      
         {/* =============== Filter Electronics ============ */}
        <button
          className={`filter-btn ${activeFilter === 'Electronics' ? 'active' : ''}`}
          onClick={() => onFilterChange('Electronics')}>Electronics </button>
          
        
        {/* =============== Filter Clothing ============ */}
        <button
          className={`filter-btn ${activeFilter === 'Clothing' ? 'active' : ''}`}
          onClick={() => onFilterChange('Clothing')}> Clothing </button>
                                
        
         {/* =============== Filter Home Decor ============ */}
        <button
          className={`filter-btn ${activeFilter === 'HomeDecor' ? 'active' : ''}`}
          onClick={() => onFilterChange('HomeDecor')}>  Home Decor</button>
      </section>

   {/* =====================print ================== */}
   <section id="product-display-area">
  {products.length > 0 ? (
    
    products.map((product, index) => (
       
      <div key={index} className="testimonial-card product-item">
        <h2>{product.name}</h2>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p className="onlyItem">{product.only}</p>
        <p className="ShowMore">Show More .. </p>
      </div>
    ))
  ) : (
    <p>No products found.</p>
  )}
</section>

    </div>
  );
};

export default ProductList;
