import React from 'react';
import { Photo } from '../actions';

interface PhotosListProps {
  photos: Photo[];
}

export const PhotosList = ({ photos }: PhotosListProps): JSX.Element => {
  return (
    <>
      {photos.map((photo: Photo) => {
        return (
          <img
            key={photo.id}
            alt={photo.title}
            src={photo.thumbnailUrl}
            style={{ margin: '3px' }}
          />
        );
      })}
    </>
  );
};
