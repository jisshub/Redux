const redux = require('redux');

// add a reducer function
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type == 'increment') {
        return {
            counter: state.counter + 1
        }   
    }
    if (action.type=='decrement') {
        return {
            counter: state.counter - 1
        }
    }
}

// create a store
const store = redux.createStore(counterReducer)

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

store.dispatch({
    type: 'decrement'
})