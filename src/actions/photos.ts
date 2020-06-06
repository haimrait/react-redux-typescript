import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';
const url = 'https://jsonplaceholder.typicode.com/photos';

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export interface FetchPhotosAction {
  type: ActionTypes.FETCH_PHOTOS;
  payload: Photo[];
}

export interface RemovePhotoAction {
  type: ActionTypes.REMOVE_PHOTO;
  payload: number;
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

export const removePhoto = (id: number): RemovePhotoAction => {
  return {
    type: ActionTypes.REMOVE_PHOTO,
    payload: id,
  };
};
