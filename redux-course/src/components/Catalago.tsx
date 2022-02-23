import { useEffect, useState } from 'react';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import { CatalogItem } from './CatalogItem';

export function Catalag() {
	const [catalog, setCatalog] = useState<IProduct[]>([]);

	useEffect(() => {
		api.get('products').then((response) => {
			setCatalog(response.data);
		});
	}, []);

	return (
		<main>
			<h2>Catalag</h2>
			{catalog.map((product) => (
				<CatalogItem key={product.id} product={product} />
			))}
		</main>
	);
}
