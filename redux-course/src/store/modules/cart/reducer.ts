import produce from 'immer';
import { Reducer } from 'redux';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
	items: [],
	hasNoStock: []
};

const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case ActionTypes.addToProductToCartSucess: {
				const { product } = action.payload;
        
				const draftAlreadyOnCart = draft.items.findIndex(item => 
          item.product.id === product.id
        );
        
				if (draftAlreadyOnCart >= 0) {
					draft.items[draftAlreadyOnCart].quantity++;
				} else {
					draft.items.push({
						product,
						quantity: 1,
					});
				}
				break;
			}
			case ActionTypes.addToProductToCartFailure: {
				draft.hasNoStock.push(action.payload.productId)
				alert('Produte sem estoque')
				console.log(action.payload)
				break
			}
			default: {
				return draft;
			}
		}
	});
};

export default cart;
