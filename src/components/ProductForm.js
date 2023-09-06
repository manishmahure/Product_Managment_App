
import React, { useState } from 'react';

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({ name: '', price: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (response.ok) {
        const newProduct = await response.json();
        addProduct(newProduct); 
        setProduct({ name: '', price: '', quantity: '' }); 
      } else {
        console.error('Error adding product:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  return (
    <div className="ProductForm">
     
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input
            type="text"
            name="name" 
            value={product.name} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price" 
            value={product.price} 
            onChange={handleChange} 
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity" 
            value={product.quantity}
            onChange={handleChange} 
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductForm;
