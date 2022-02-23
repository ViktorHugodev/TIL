import { createStore, applyMiddleware } from "redux";
import { ICartState } from "./modules/cart/types";
import rootReducers from "./modules/rootReducers";
import { composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./modules/rootSaga";

export interface IState {
  cart: ICartState
}

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

const store = createStore(
  rootReducers, 
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)
sagaMiddleware.run(rootSaga)
export default store