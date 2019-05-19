import React from 'react';

import {keys} from 'lodash';

import products, {getProductsMap} from '../../App/Main/Products/products';



const CartTotal = ({
	productsInCart,
	productsMap = getProductsMap(products)
}) => {
	return (
		<div>
        	Total:   
            	{
            		keys(productsInCart).reduce((sum,productId) => {
            			return (
            				sum + (productsInCart[productId] * productsMap[productId].price)
            			)
	            	},0)
            	} $
        </div>
	)
}

export default CartTotal;