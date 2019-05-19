import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import './ProductListItem.css';

import QuantityInput from '../../../features/Quantity/QuantityInput'

class ProductListItem extends Component {

	static propTypes = {
		name: PropTypes.string.isRequired,
		image: PropTypes.string,
		description: PropTypes.string,
		capacity: PropTypes.number,
		type: PropTypes.string,
		price: PropTypes.number.isRequired
	}

	static defaultProps = {
		isLiked: false
	}

	state = {
		productCount: 1
	}

	onIncrementClick = () => {
		this.setState((prevState) => ({
			productCount: prevState.productCount + 1
		}))
	}

	onDecrementClick = () => {
		this.setState((prevState) => ({
			productCount: prevState.productCount - 1
		}))
	}

	renderProductCount() {
		return(
			<QuantityInput 
				onIncrementClick={this.onIncrementClick} 
				onDecrementClick={this.onDecrementClick} 
				productCount={this.state.productCount} 
				minCount={1}
				maxCount={10}
			/>
		)
	}

	renderLike() {
		if(this.props.isLiked) {
			this.props.dispatchDislike(this.props.id)
		} else {
			this.props.dispatchLike(this.props.id)
		}
	}

	render () {
		const {
			id,
			image,
			name,
			description='No description',
			type,
			capacity,
			price,
			addProductToCart,
			isLiked
		} = this.props

		return (
			<div className='product-list-item'>
				<div className='product-img'>
					<img src={image} alt={name} />
				</div>
				<button onClick={() => this.renderLike()}>
				 	{isLiked ? <span>&#9829;</span> : <span>&#9825;</span>}
				</button>
				<h2 className='product-title'>{name}</h2>
				<div className='product-description'>{description}</div>
				<div className='product-features'>Type: {type}</div>
				<div className='product-features'>Capacity: {capacity} Gb</div>
				{this.renderProductCount()}
				<div className='product-price'>$ {price}</div>
				<button key={id} onClick={() => addProductToCart(id, this.state.productCount)} className='btn-add-to-cart'>Add to cart</button>
			</div>
		)
	}
}

const mapStateToProps = (state,props) => {
	
	return {
		isLiked: state.likeProducts[props.id]
	}
};

const mapDispatchToProps = (dispatch) => ({
	dispatchLike: (id) => dispatch({
		type: 'LIKE',
		id: id
	}),
	dispatchDislike : (id) => dispatch({
		type: 'DISLIKE',
		id: id
	}),
	addProductToCart: (id,count) => dispatch({
		type: 'ADD-PRODUCT_TO_CART',
		id: id,
		count: count
	})
});

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(ProductListItem);