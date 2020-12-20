import React from 'react';
import PropTypes from 'prop-types';
import './Items.css';

const Item = ({ item, onAddToCart }) => (
    <div className='Item'>
        <div className='Item-left'>
            <div className='Item-image' />
            <div className='Item-title'> {item.name} </div>
            <div className='Item-description'> {item.description} </div>
        </div>
        <div className='Item-right'>
            <div className='Item-price'>
                ${item.price}
            </div>
            <button
                className='Item-addToCart'
                onClick={onAddToCart}
            >
                Add to Cart
            </button>
        </div>
    </div>
);

export default Item;