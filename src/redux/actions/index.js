const photosRequested = () => {
  return {
    type: 'FETCH_PHOTOS_REQUEST',
  };
};

const photosLoaded = newPhotos => {
  return {
    type: 'FETCH_PHOTOS_SUCCESS',
    payload: newPhotos,
  };
};

const photosError = error => {
  return {
    type: 'FETCH_PHOTOS_FAILURE',
    payload: error,
  };
};

const fetchPhotos = (unplashService) => () => (dispatch) => {
  dispatch(photosRequested());
  unplashService
    .getThumbPhotos()
    .then(data => dispatch(photosLoaded(data)))
    .catch(err => dispatch(photosError(err)));
};

export {fetchPhotos};
