import React from 'react';

import './ProductsList.css';

import ProductListItem from './ProductListItem';
import products from './products'


const ProductsList = () => {
	return (
		<div>
			<h1 className='title-page'>Products List</h1>
			<div className='row'>

				{
					products.map(({
						name,
						id,
						description,
						type,
						capacity,
						price,
						image
					}) => {
						
						return (
							<div className='col-lg-6' key={id}>
								<ProductListItem 
									name={name}
									description={description}
									type={type}
									capacity={capacity}
									price={price}
									image={image}
									id={id}
								/> 
							</div>
						)
					})
				}
			</div>
		</div>
	)
};

export default ProductsList;