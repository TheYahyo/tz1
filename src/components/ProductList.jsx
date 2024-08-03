import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../reducers/ProductSlice';
import ProductItem from './ProductItem';
import './Product.css';
const ProductList = () => {
  const [productText, setProductText] = useState('');
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (productText.trim() !== '') {
      dispatch(addProduct(productText));
      setProductText('');
    }
  };

  return (
    <div>
      <input 
        type="text"   
        value={productText} 
        onChange={(e) => setProductText(e.target.value)} 
        placeholder="Введите задачу"
      />
      <button onClick={handleAddProduct}>Добавить</button>
      <div>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
