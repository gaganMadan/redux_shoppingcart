import {DECREASE, INCREASE, REMOVE, CLEAR_CART } from './actions'

const Reducer = (state, actions) => {
    if(actions.type === CLEAR_CART){
        return {...state, cart : []}
    }
    if(actions.type === REMOVE) {
       return { ...state, cart : state.cart.filter((item) => item.id !== actions.payload.id)}
      //console.log(actions.payload.id)
    }

    return state
}

export default Reducer