import React from 'react';
import { connect } from 'react-redux';
import { Photo, fetchPhotos, removePhoto } from '../actions';
import { Store } from '../reducers';
import { PhotosList } from './PhotosList';

interface AppProps {
  photos: Photo[];
  fetchPhotos: Function;
  removePhoto: Function;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  onRemoveClick = (id: number): void => {
    this.props.removePhoto(id);
  };

  render() {
    return (
      <div>
        <PhotosList
          photos={this.props.photos}
          onRemoveClick={this.onRemoveClick}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ photos }: Store): { photos: Photo[] } => {
  return { photos };
};

export const App = connect(mapStateToProps, { fetchPhotos, removePhoto })(_App);
