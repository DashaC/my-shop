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
					products.map((product) => {
						return (
							<div className="col-lg-6" key={product.id}>
								<ProductListItem 
									name={product.name}
									description={product.description}
									type={product.type}
									capacity={product.capacity}
									price={product.price}
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