import React from 'react';

const QuantityInput = ({
	onDecrementClick,
	onIncrementClick,
	productCount,
	minCount,
	maxCount
}) => {
	return (
		<div className='quantity-input'>
					<button 
						onClick={() => onDecrementClick()} 
						disabled={productCount <= minCount}
					>
					-
					</button>
					<input type='text' value={productCount} readOnly />
					<button 
						onClick={() => onIncrementClick()}
						disabled={productCount >= maxCount}
					>
					+
					</button>
			</div>
	)
}

export default QuantityInput;