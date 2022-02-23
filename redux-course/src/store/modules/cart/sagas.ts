import { AxiosResponse } from 'axios'
import {all, call, put, select, takeLatest} from 'redux-saga/effects'
import { IState } from '../..'
import api from '../../../services/api'
import {addToProductToCartFailure, addToProductToCartRequest, addToProductToCartSucess} from './actions'
import { ActionTypes } from './types'

type CheckProductStockRequest = ReturnType<typeof addToProductToCartRequest>

interface StockProducts {
  id: number
  quantity: number
}

function* checkProductStock({payload}: CheckProductStockRequest){
  const {product} = payload
  const currentQuantity: number = yield select((state: IState) => {
    return state.cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  })
  
  const checkProductStock: AxiosResponse<StockProducts> = yield call(api.get, `/stock/${product.id}`) 

  if(checkProductStock.data.quantity > currentQuantity) {
    yield put(addToProductToCartSucess(product))
    
  } else {
    yield put(addToProductToCartFailure(product.id))
  }

}

export default all([
  takeLatest(ActionTypes.addToProductToCartRequest, checkProductStock)
])