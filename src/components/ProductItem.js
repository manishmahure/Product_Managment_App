import React from 'react';

function ProductItem({ product }) {
  return (
    <li>
      {product.productName} - {product.inStock ? 'In Stock' : 'Out of Stock'}
    </li>
  );
}

export default ProductItem;
