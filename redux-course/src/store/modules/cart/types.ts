export enum ActionTypes {
  addToProductToCartRequest = 'ADD_PRODUCT_TO_CART_REQUEST',
  addToProductToCartSucess = 'ADD_PRODUCT_TO_CART_SUCESS',
  addToProductToCartFailure = 'ADD_PRODUCT_TO_CART_FAILURE'
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface ICartItems {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items:ICartItems[]
  hasNoStock: number[]
}