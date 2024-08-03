import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, toggleImportant, toggleEditing, updateProduct } from '../reducers/ProductSlice';
import './Product.css';
const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const [editText, setEditText] = useState(product.text);

  return (
    <div className={`product-item ${product.isImportant ? 'important' : ''}`}>
      {product.isEditing ? (
        <div>
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)} 
          />
          <button onClick={() => dispatch(updateProduct({ id: product.id, text: editText }))}>Сохранить</button>
          <button onClick={() => dispatch(toggleEditing(product.id))}>Отмена</button>
        </div>
      ) : (
        <div>
          <span>{product.text}</span>
          <button onClick={() => dispatch(toggleEditing(product.id))}>Изменит</button>
          <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
          <button onClick={() => dispatch(toggleImportant(product.id))}>
            {product.isImportant ? 'Удалит Важный' : 'Сделат Важым'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
