import { FetchPhotosAction, RemovePhotoAction } from './photos';

export enum ActionTypes {
  FETCH_PHOTOS,
  REMOVE_PHOTO,
}

export type PhotoAction = FetchPhotosAction | RemovePhotoAction;
