import {legacy_createStore as createStore, applyMiddleware} from 'redux'
import logger from'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../reducer'

let store;

export function configureStore(){
    store = createStore(reducer,applyMiddleware(thunk,logger));
    return store
}