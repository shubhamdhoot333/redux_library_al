import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
//create store
const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];
//create reducer 

function reducer(state = { amount: 1 }, action) {
    if (action.type == "increment") return { amount: state.amount + 1 }
    if (action.type == "decrement") return { amount: state.amount - 1 }
    if (action.type == "incrementBYAmount") return { amount: state.amount + action.payload }
    if (action.type == "decrementBYAmount") return { amount: state.amount - action.payload }
    else return state
}
//access global state

// store.subscribe(() => {
//     history.push(store.getState())
//     console.log(history)
// })


setInterval(() => {
    store.dispatch({ type: "increment" })
    store.dispatch({ type: "decrement" })
    store.dispatch({ type: "incrementBYAmount", payload: 4 })
    store.dispatch({ type: "increment", payload: 2 })
}, 3000)