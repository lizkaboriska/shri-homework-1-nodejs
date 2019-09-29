const createStore = require("./store").createStore;
const createView = require("./view").createView;

const SEARCH_FIELD_CHANGED = "SEARCH_FIELD_CHANGED";

function reducer(state = InitialState, action) {
    switch (action.type) {
        case SEARCH_FIELD_CHANGED:
            let pattern = action.payload;
            return InitialState.filter(object => object.name.includes(pattern));
        default:
            return state;
    }
}

let InitialState = [
    {
        name: "api",
        commit: "32fcgvj34eu8",
        branch: "branch",
        commit_message: "Fix stuff",
        committer: "author",
        updated: "5s ago"
    },
    {
        name: "second api",
        commit: "3f4g3vhbf8",
        branch: "branch",
        commit_message: "Fix second stuff",
        committer: "author",
        updated: "7s ago"
    },
    {
        name: "third api",
        commit: "34rtefwgvhbfd78",
        branch: "branch",
        commit_message: "Fix another stuff",
        committer: "author",
        updated: "19s ago"
    },
    {
        name: "fourth api",
        commit: "45rtfgefd87u",
        branch: "branch",
        commit_message: "Fix stuff",
        committer: "author",
        updated: "56s ago"
    },
    {
        name: "fifth api",
        commit: "9i2jehwd5",
        branch: "branch",
        commit_message: "Fix stuff",
        committer: "author",
        updated: "1m ago"
    },
    {
        name: "sixth api",
        commit: "32fcgvj34eu8",
        branch: "branch",
        commit_message: "Fix stuff",
        committer: "author",
        updated: "5s ago"
    },
    {
        name: "seventh api",
        commit: "12wf8kol",
        branch: "branch",
        commit_message: "Fix stuff",
        committer: "author",
        updated: "2m ago"
    }
];

$(document).ready(function() {
    let store = createStore(reducer, InitialState);
    let view = createView(store);

    $('#files-search').on("input", function () {
        const pattern = $(this).val();
        store.dispatch({
            type: SEARCH_FIELD_CHANGED,
            payload: pattern
        })
    });

    store.dispatch({
        type: SEARCH_FIELD_CHANGED,
        payload: "",
    });
});