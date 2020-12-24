import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({ match }) => {

	return (
		<>
			<p>Stona Produktu</p>
			<Product page={match.params.page} />
			<Link to='/products'>Powruć do productów</Link>
		</>
	);
};

export default ProductPage;
