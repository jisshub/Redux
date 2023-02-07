const redux = require('redux');

// add a reducer function
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}

// create a store
const store = redux.createStore(counterReducer)
console.log(store.getState())

// subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

// call subscribe method
store.subscribe(counterSubscriber)

store.dispatch({
    type: 'increment',
})
