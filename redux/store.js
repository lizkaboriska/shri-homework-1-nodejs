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

module.exports = {
    "createStore": createStore
}

