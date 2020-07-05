import {DECREASE, INCREASE, REMOVE, CLEAR_CART } from './actions'

const Reducer = (state, actions) => {
    if(actions.type === CLEAR_CART){
        return {...state, cart : []}
    }

    return state
}

export default Reducer