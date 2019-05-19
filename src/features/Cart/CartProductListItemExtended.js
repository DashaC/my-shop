import React from 'react';
import {connect} from 'react-redux';

import './CartProductListItemExtended.css';

import QuantityInput from '../Quantity/QuantityInput';


const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity
}) => (
    <div>
        <div className="cart-product-list-item-description">
            <div className="row">
                <div className="col-lg-3">
                    <img src={product.image} alt={product.name}/>
                </div>
                <div className="col-lg-9">
                    <p className="cart-extended-name">
                        <span> {product.name} </span> 
                    </p>
                    <p className="cart-extended-price">
                         Price for one item: <span className="bold">$ {product.price} </span> 
                    </p>
                    <p>
                        <QuantityInput 
                            minCount={0}
                            maxCount={10}
                            productCount={productCount} 
                            onDecrementClick={() => {
                                if (productCount === 1) {
                                    removeProductFromCart(product.id)
                                } else {
                                    changeProductQuantity(product.id, productCount - 1)
                                }
                            }} 
                            onIncrementClick={() => changeProductQuantity(product.id, productCount + 1)} 
                        />
                    </p>
                    <p className="cart-extended-count">
                         Selected quantity: <span className="bold"> {productCount} </span>   
                    </p>
                    <p className="cart-extended-sum">
                         Sum for this item: <span className="bold sum-price">$ {(product.price * productCount)} </span> 
                    </p> 
                    <button onClick={() => removeProductFromCart(product.id)}>DELETE THIS PRODUCT</button>
                </div>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    removeProductFromCart: (id) => dispatch({
        type: 'REMOVE_PRODUCT_FROM_CART',
        id: id
    }),
    changeProductQuantity : (id,count) => dispatch({
        type: 'CHANGE_PRODUCT_QUANTITY',
        id: id,
        count: count
    })
});


export default connect(
    null,
    mapDispatchToProps
)(CartProductListItemExtended);
