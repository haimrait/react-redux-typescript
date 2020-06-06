import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
const url = 'https://jsonplaceholder.typicode.com/photos';

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface FetchPhotosAction {
  type: ActionTypes.FETCH_PHOTOS;
  payload: Photo[];
}

export const fetchPhotos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Photo[]>(url);

    dispatch<FetchPhotosAction>({
      type: ActionTypes.FETCH_PHOTOS,
      payload: response.data,
    });
  };
};
