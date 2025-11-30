import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE
} from './actionTypes';

// Action creators
export const fetchLoremRequest = () => ({
  type: FETCH_LOREM_REQUEST
});

export const fetchLoremSuccess = (data) => ({
  type: FETCH_LOREM_SUCCESS,
  payload: data
});

export const fetchLoremFailure = (error) => ({
  type: FETCH_LOREM_FAILURE,
  payload: error
});

// Async action using redux-thunk
export const fetchLoremData = () => {
  return (dispatch) => {
    dispatch(fetchLoremRequest());
    
    return fetch('https://loripsum.net/api/10/medium/plaintext')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        dispatch(fetchLoremSuccess({ text }));
      })
      .catch(error => {
        dispatch(fetchLoremFailure(error.message));
      });
  };
};
