//compose and object that represents how it should update state
//stack reducer- dynamcially creates stack object
import { SET_STACK } from '../actions';

function stack(state = {}, action){
  switch (action.type){
    case SET_STACK:
      return action.stack;
    default:
      return state;
  }
}

export default stack;
