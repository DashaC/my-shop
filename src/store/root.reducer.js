import { combineReducers } from 'redux';
import productLikeReducer from './product.like.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
	likeProducts: productLikeReducer,
	productsInCart: cartReducer
});

export default rootReducer;