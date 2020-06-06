import React from 'react';
import { connect } from 'react-redux';
import { Photo, fetchPhotos, removePhoto } from '../actions';
import { Store } from '../reducers';
import { PhotosList } from './PhotosList';
import { Spinner } from './Spinner';

interface AppProps {
  photos: Photo[];
  fetchPhotos: Function;
  removePhoto: Function;
}

interface AppState {
  loading: boolean;
}

class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { loading: false };
  }

  componentDidMount() {
    this.props.fetchPhotos();
    this.setState({ loading: true });
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.photos.length && this.props.photos.length) {
      this.setState({ loading: false });
    }
  }

  onRemoveClick = (id: number): void => {
    this.props.removePhoto(id);
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <PhotosList
            photos={this.props.photos}
            onRemoveClick={this.onRemoveClick}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ photos }: Store): { photos: Photo[] } => {
  return { photos };
};

export const App = connect(mapStateToProps, { fetchPhotos, removePhoto })(_App);
