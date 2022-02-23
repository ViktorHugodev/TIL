import { ActionTypes, IProduct } from "./types";

export function addToProductToCartRequest(product: IProduct) {
  return {
    type: ActionTypes.addToProductToCartRequest,
    payload:{
      product
    }
  }
}
export function addToProductToCartSucess(product: IProduct) {
  return {
    type: ActionTypes.addToProductToCartSucess,
    payload:{
      product
    }
  }
}
export function addToProductToCartFailure(productId: number) {
  return {
    type: ActionTypes.addToProductToCartFailure,
    //Só precisa do ID. Pois não há motivos pra saber todo o obj caso tenha falhado.
    payload:{
      productId
    }
  }
}