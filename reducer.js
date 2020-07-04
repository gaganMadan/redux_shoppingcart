import {DECREASE, INCREASE, REMOVE } from './actions'



const Reducer = (state, actions) => {
    if(actions.type === DECREASE) {
        
        return { ...state, count : state.count - 1}
    }
    if(actions.type === INCREASE) {
        
        return {  ...state, count : state.count + 1}
    }
    return state
}

export default Reducer