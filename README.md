# Redux

[What is Redux](#what-is-redux)

[Cross Component / App Wide State](#cross-component--app-wide-state)

[Why use Redux over React Context](#why-use-redux-over-react-context)

[How Redux Works](#how-redux-works)


# What is Redux ?

- Redux is a popular state management library for JavaScript applications, often used with React. It provides a centralized store for all the data needed by your application and a way to manage the changes to that data.

- A state management system for cross-component or app-wide state.

- Redux can be used with any javascript frameworks.

# Cross Component / App Wide State

## Local State
    - State that belongs to a single component.
    - Eg. Listening to user input in an input field, toggling a 'show more' details field.

## Cross Component State
    - State that affects mulitple components.
    - Eg. open/close state of a modal overlay.
    - Requires `prop chains` / `prop drilling`.

## App-Wide State
    - State that affects the entire app (all components).
    - Eg: User authentication status
    - Requires `prop chains` / `prop drilling`.


# Why use Redux over React Context

## Disadvantages of Using React Context

### 1. Complex set up / management.
    In complex apps, managing react context can lead to deeply nested jsx code and huge context provider components.

### 2. Performance
    React context is not optimized for high frequency state changes.

# How Redux Works

- `States` are stored in a `central data store`.
- We can use this states from our `components`. 
- If state changes, components knows about it and update the UI. For this we subscribe to the central data store. Whenever data changes store notifies the components, then components get the data they need. This way we get the data out of store


## How to change the data in store

- Components cannot direclty manipulate or change the data in store.
- For that we use `Reducer` function.
- This function is responsible for updating / changing store data.

## How to connect components with reducer function

- Components dispatch `actions`.
- `Actions` are javascript objects that describes the kind of operation reducer should perform.
- Redux forwards the action to the `reducer` function. 
- Reducer then does the actions.
- Reducer then gives a new state that replaces the current state in the `central data store`.
- When `central data store` is updated, `components` subscribed to the store is notified and UI is updated.
- This how redux works.


# Implemeting Redux + React

```bash
npm install redux
```

## Create a store and reducer fucntion

- import redux.
- create a `store` object.
- store object needs to manage data. that data is determined by a `reducer` function. So we add a reducer function.
- `reducer` function is called by redux. it takes 2 parameters.
    1. old state
    2. action that is dispatched
- `reducer` function returns a new state.
- `reducer` function should be a `pure function` means same input leads to same output. Ie takes a given input and returns an expected ouputs.
- So reducer takes `old state` and action and then gives back a `new state` which replaces the old state.
- Pass reducer function to `createStore()` method as an argument. Because store needs to know which reducer is responsible for changing the `store`. Reducer fucntion works with the store. So the store wants to know which `reducer` function manipulates the data.
- Now we got `reducer` function and `store`.

```js
const redux = require('redux');

// create a store
const store = redux.createStore(counterReducer)

// add a reducer function
const counterReducer = (state, action) => {
    return {
        counter: state.counter + 1
    }
}
```


## Create a Subscriber function

- Next, we need a `subscriber` to subscribe to the store and also an `action` to dispatch.

- Create a `subscriber` function.

- Call getState method. `getState` is a method which is available on the store object. It gaves us latest state once it is updated.

- Execute the susbrciber function when state changes by calling `subscribe()` on store object

- Pass subsciber function to subscribe() method.


```js
// subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
}

// call subscribe method
store.subscribe(counterSubscriber)
```

- So we now have a store, reducer and subscriber. Next create an action.

- Set default value to state to not get into errors.

```js
const counterReducer = (state = {counter: 0}, action) => {
    return {
        counter: state.counter + 1
    }
}
```

## Create and dispatch an action


- `dispatch()` is a method to dispatch an action.
- It is a javascript object with `type` property which acts as an identifier. 

```js
store.dispatch({
    type: 'INCREMENT',
})
```

- Here we dispatch an action to run the reducer function and thereby incrementing state counter.

- In terminal run the file with node.

```bash
node filename.js
```

- Counter will be increment with new value.


## More Redux basics

- Condtionals on action types.

```js
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
```

https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25600160#overview