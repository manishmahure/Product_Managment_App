
import React, { useEffect, useState } from 'react';

function ProductList({  deleteProduct }) {
  const [products, setProducts] = useState([]);
  const handleDelete = async (productId, index) => {
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
      
        deleteProduct(index);
      } else {
        console.error('Error deleting product:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => total + calculateSubtotal(product.price, product.quantity), 0);
  };


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.error('Error fetching products:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="ProductList">
      <h2>Available Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>₹{product.price}</td>
              <td>{product.quantity}</td>
              <td>₹{calculateSubtotal(product.price, product.quantity)}</td>
              
               <td>
              <button onClick={() => handleDelete(product._id, index)}>Delete</button>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Total: ₹{calculateTotal()}</p>
    </div>
  
  );
}

export default ProductList;
