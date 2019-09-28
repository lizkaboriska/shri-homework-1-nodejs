function createStore(reducer, initial_state ) {
    let state = initial_state;
    let subscribers = [];

    return {
        dispatch: function (action) {
            state = reducer(state, action);
            for (const subscriber of subscribers) {
                subscriber();
            }
            return action;
        },
        getState: function () {
            return state;
        },
        subscribe: function (listener) {
            subscribers.push(listener);

            return function () {
                subscribers = subscribers.filter(subscriber => subscriber !== listener);
            }
        }
    };
}

const InitialState = {
    a: 0,
    b: 1,
    c: 2
}

//console.log(InitialState.a + InitialState.b);

function reducer(state = InitialState, action) {
    switch (action.type) {
        case "PLUS_ONE":
            state.a = state.a + action.payload;
            state.b = state.b + action.payload;
            state.c = state.c + action.payload;
        case "MINUS_TWO":
            state.a = state.a - action.payload;
            state.b = state.b - action.payload;
            state.c = state.c - action.payload;
    }
    return state;
}

let store = createStore(reducer, InitialState);

console.log(store.getState());

let plusOne = {
    type: "PLUS_ONE",
    payload: 1
}
let plusTwo  = {
    type: "MINUS_TWO",
    payload: 2
}


store.dispatch(plusOne);
console.log(store.getState());

store.dispatch(plusTwo);
console.log(store.getState());

