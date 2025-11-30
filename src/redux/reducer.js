import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from './actionTypes';

const initialState = {
  loading: false,
  data: null,
  error: null
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case FETCH_LOREM_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    
    case FETCH_LOREM_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    default:
      return state;
  }
};

export default loremReducer;
