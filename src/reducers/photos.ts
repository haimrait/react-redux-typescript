import { Photo, PhotoAction, ActionTypes } from '../actions';

export const photosReducer = (state: Photo[] = [], action: PhotoAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS:
      return action.payload;
    case ActionTypes.REMOVE_PHOTO:
      return state.filter((photo: Photo) => photo.id !== action.payload);
    default:
      return state;
  }
};
