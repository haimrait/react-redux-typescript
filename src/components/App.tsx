import React from 'react';
import { connect } from 'react-redux';
import { Photo, fetchPhotos } from '../actions';
import { Store } from '../reducers';

interface AppProps {
  photos: Photo[];
  fetchPhotos: Function;
}

class _App extends React.Component<AppProps> {
  render() {
    return <div>Hello World</div>;
  }
}

const mapStateToProps = ({ photos }: Store): { photos: Photo[] } => {
  return { photos };
};

export const App = connect(mapStateToProps, { fetchPhotos })(_App);
