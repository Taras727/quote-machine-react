import { CHANGE_QUOTE } from './actions';

export const randomReducer = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_QUOTE:
      return Object.assign({}, state, action.payload);

    default:
      return state;
  }
};