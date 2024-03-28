import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { Rootreducer } from './reduce'

export const storeReduce = () => {
    const store = createStore(Rootreducer, applyMiddleware(thunk))

    return store
}