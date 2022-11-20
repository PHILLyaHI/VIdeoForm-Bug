import _ from 'lodash';
import { GET_VIDEOS, ADD_VIDEO, GET_VIDEO, DELETE_VIDEO } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_VIDEO:
     
    case ADD_VIDEO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case DELETE_VIDEO:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};