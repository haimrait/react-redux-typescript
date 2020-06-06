import { Photo, FetchPhotosAction, ActionTypes } from '../actions';

export const photosReducer = (
  state: Photo[] = [],
  action: FetchPhotosAction
) => {
  switch (action.type) {
    case ActionTypes.FETCH_PHOTOS:
      return action.payload;
    default:
      return state;
  }
};
