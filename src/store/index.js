import { createStore } from 'redux';
const reducerFn = (state = { counter: 0 }, action) => {

    // We should not mutate the original state
    // No adjacent code here
    if (action.type == 'roll') {
        return { counter: Math.floor(Math.random() * 6) + 1 }
    }

    return state;
}

const store = createStore(reducerFn)
export default store;