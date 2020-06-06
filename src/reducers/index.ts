import { combineReducers } from 'redux';
import { photosReducer } from './photos';
import { Photo } from '../actions';

export interface Store {
  photos: Photo[];
}

export const reducers = combineReducers<Store>({
  photos: photosReducer,
});
