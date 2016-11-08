// UnconferencePlanner namespace

window.UnconferencePlanner = window.UnconferencePlanner || {};

// action types

const LOAD = 'LOAD';
const DB_UPDATE = 'DB_UPDATE';

// action creators

UnconferencePlanner.act = {
    load: function (data) {
      return {
        type: LOAD,
        data: data
      };
    },
    db_update: function(talks) {
      return {
        type: DB_UPDATE,
        talks: talks
      }
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
    case DB_UPDATE:
      return {
        user: state.user,
        talks: action.talks
      };
    default:
      return state;
  }
}

// store

const store = Redux.createStore(reducer);
UnconferencePlanner.store = store;
