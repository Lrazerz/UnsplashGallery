import React, {Component} from 'react';
import ErrorIndicator from './error-indicator';
import {bindActionCreators} from 'redux';
import {fetchPhotos} from '../redux/actions';
import {connect} from 'react-redux';

class ErrorBoundary extends Component {
  state = {error: null};

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    const {error} = this.state;
    const {fetchPhotos} = this.props;

    if (this.state.error) {
      return <ErrorIndicator error={error} fetchPhotos={fetchPhotos}/>;
    }

    return this.props.children;
  }
}

const mapDispatchToProps = (dispatch, {unsplashService}) => {
  return bindActionCreators(
    {
      fetchPhotos: fetchPhotos(unsplashService),
    },
    dispatch,
  );
};

export default connect(
  null,
  mapDispatchToProps,
)(ErrorBoundary);
