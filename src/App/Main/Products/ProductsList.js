import React from 'react';

import './productsList.css';

import ProductListItem from './ProductListItem';
import products from './products';

const ProductsList = () => {
	return (
		<div>
			<h1 className='title-page'>Products List</h1>
			<div className="row">
				{
					products.map(({
						id,
						name,
						type,
						description,
						capacity,
						price
					}) => {
						return (
							<div className="col-lg-6" key={id}>
								<ProductListItem 
									name={name}
									description={description}
									type={type}
									capacity={capacity}
									price={price}
								/>
							</div>
						)
					})
				}
			</div>

		</div>
	)
}

export default ProductsList;