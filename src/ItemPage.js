import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './ItemPage.css'

function ItemPage({ items, onAddToCart }) {
    return (
        <ul className='ItemPage-items'>
            {items.map(item => 
            <li key={item.id} className='ItemPage-item'>
                <Item item={item}>
                {/* This button element is a children of Item component */}
                    <button
                        className="Item-addToCart"
                        onClick={() => onAddToCart(item)}>
                        Add to cart
                    </button>
                </Item>
            </li>
            )}
        </ul>
    );
}

ItemPage.propTypes = {
    items: PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default ItemPage;