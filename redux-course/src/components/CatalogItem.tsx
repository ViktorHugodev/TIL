import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addToProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

interface ProductItemProps {
	product: IProduct;
}

export const CatalogItem: FC<ProductItemProps> = ({ product }) => {
	const dispatch = useDispatch();
	const hasFailedStock = useSelector<IState, boolean>((state) => {
		return state.cart.hasNoStock.includes(product.id);
	});
	const handleAddToCart = useCallback(() => {
		dispatch(addToProductToCartRequest(product));
	}, [dispatch, product]);
	return (
		<div key={product.id}>
			<strong>{product.title}</strong> {' - '}
			<span>{product.title}</span> {' -  '}
			<button onClick={handleAddToCart}>Comprar</button>
			{hasFailedStock && <span style={{ color: 'red' }}>Sem estoque</span>}
		</div>
	);
};
