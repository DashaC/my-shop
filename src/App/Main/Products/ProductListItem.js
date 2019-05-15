import React from 'react';
import PropTypes from 'prop-types';

import './productListItem.css';

const ProductListItem = ({
	name,
	description,
	type,
	capacity,
	price,
	image
}) => {
    return (
        <div className='product-list-item'>
        	<div className='product-image'>
        		<img  src={image} alt={name}/>
        	</div>
            <h2 className='product-title'>{name}</h2>
            <div className='product-description'>{description}</div>
            <div className='product-features'>Type: {type}</div>
            <div className='product-features'>Capacity: {capacity} Gb</div>
            <div className='product-price'>$ {price}</div>
            <button className='btn-add-to-cart'>Add to cart</button>
        </div>
    )
};

ProductListItem.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	type: PropTypes.string,
	capacity: PropTypes.number,
	price: PropTypes.number
}


export default ProductListItem;

