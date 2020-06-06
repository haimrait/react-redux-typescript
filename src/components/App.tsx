import React from 'react';
import { connect } from 'react-redux';
import { Photo, fetchPhotos } from '../actions';
import { Store } from '../reducers';
import { PhotosList } from './PhotosList';

interface AppProps {
  photos: Photo[];
  fetchPhotos: Function;
}

class _App extends React.Component<AppProps> {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div>
        <PhotosList photos={this.props.photos} />
      </div>
    );
  }
}

const mapStateToProps = ({ photos }: Store): { photos: Photo[] } => {
  return { photos };
};

export const App = connect(mapStateToProps, { fetchPhotos })(_App);
