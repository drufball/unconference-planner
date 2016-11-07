// UnconferencePlanner namespace

window.UnconferencePlanner = window.UnconferencePlanner || {};

// action types

const LOAD = 'LOAD';

// action creators

UnconferencePlanner.act = {
    load: function (data) {
        return {
            type: LOAD,
            data: data
        };
    }
};

// reducer

const emptyState = {
  talks: [],
  user: {}
};

function reducer (state = emptyState, action) {
  switch (action.type) {
    case LOAD:
      return action.data;
    default:
      return state;
  }
}

// store

const store = Redux.createStore(reducer);
UnconferencePlanner.store = store;
