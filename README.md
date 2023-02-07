# Redux

[What is Redux](#what-is-redux)

[Cross Component / App Wide State](#cross-component--app-wide-state)

[Why use Redux over React Context](#why-use-redux-over-react-context)

[How Redux Works](#how-redux-works)

# What is Redux ?

- Redux is a popular state management library for JavaScript applications, often used with React. It provides a centralized store for all the data needed by your application and a way to manage the changes to that data.

- A state management system for cross-component or app-wide state.

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
- Reducer then give a new state that replaces the current state in the `central data store`.
- When `central data store` is updated, `components` subscribed to the store is notified and update their UI.
- This how redux works.
