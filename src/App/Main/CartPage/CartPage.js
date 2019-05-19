import React from 'react';
import {connect} from 'react-redux';

import CartTotal from '../../../features/Cart/CartTotal';
import CartProductList from '../../../features/Cart/CartProductList';
import CartProductListItemExtended from '../../../features/Cart/CartProductListItemExtended';


const CartPage = ({
	productsInCart
}) => {
	return (
		<div>
			<h1 className='title-page'>Cart Page</h1>
			<div className="cart text-center">
            <CartProductList 
            	productsInCart={productsInCart} 
            	CartListItemComponent={CartProductListItemExtended}
            />
            <CartTotal productsInCart={productsInCart}/>
        </div>
		</div>
	)
};

const mapStateToProps = (state) => {
	
	return {
		productsInCart: state.productsInCart
	}
};

export default connect(mapStateToProps)(CartPage);