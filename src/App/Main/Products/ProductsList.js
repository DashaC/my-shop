import React from 'react';

import './productsList.css';

import ProductListItem from './ProductListItem';

const ProductsList = () => {
	return (
		<div>
			<h1 className='title-page'>Products List</h1>
			<div className="row">
                <div className="col-lg-6">
					<ProductListItem 
						name='iPhone 7'
						description='This is iPhone 7'
						type='phone'
						capacity='64'
						price='500'
					/>
				</div>
				<div className="col-lg-6">
					<ProductListItem 
						name='iPhone 8'
						description='This is iPhone 8'
						type='phone'
						capacity='128'
						price='700'
					/>
				</div>
				<div className="col-lg-6">
					<ProductListItem 
						name='iPhone X'
						description='This is iPhone X'
						type='phone'
						capacity='256'
						price='900'
					/>
				</div>
				<div className="col-lg-6">
					<ProductListItem 
						name='iPhone XS'
						description='This is iPhone XS'
						type='phone'
						capacity='256'
						price='1000'
					/>
				</div>
			</div>

		</div>
	)
}

export default ProductsList;