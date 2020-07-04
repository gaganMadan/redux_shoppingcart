import {DECREASE} from './actions'
import {INCREASE} from './actions'
import {RESET} from './actions'

const Reducer = (state, actions) => {
    if(actions.type === DECREASE) {
        console.log(state);
        return { count : state.count - 1, name: 'Gagan'}
    }
    if(actions.type === INCREASE) {
        return { count : state.count + 1, name: 'Dikshan'}
    }
    return {state}
}

export default Reducer