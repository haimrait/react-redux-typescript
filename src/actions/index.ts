import axios from 'axios';
import { Dispatch } from 'redux';

const url = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPhotos = () => {
  return async (dispatch) => {
    const response = await axios.get(url);

    dispatch({
      type: 'FETCH_PHOTOS',
      payload: response.data,
    });
  };
};
