import React from 'react';
import { Photo } from '../actions';
import './PhotoList.css';

interface PhotosListProps {
  photos: Photo[];
  onRemoveClick: Function;
}

export const PhotosList = ({
  photos,
  onRemoveClick,
}: PhotosListProps): JSX.Element => {
  return (
    <>
      {photos.map((photo: Photo) => {
        return (
          <div key={photo.id} className="wrapper">
            <img alt={photo.title} src={photo.thumbnailUrl} />
            <span
              onClick={() => onRemoveClick(photo.id)}
              className="close"
            ></span>
          </div>
        );
      })}
    </>
  );
};
