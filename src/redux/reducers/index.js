const initialState = {
  photos: [],
  loading: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PHOTOS_REQUEST':
      return {
        photos: [],
        loading: true,
        error: null,
      };

    case 'FETCH_PHOTOS_SUCCESS':
      return {
        photos: action.payload,
        loading: false,
        error: null,
      };

    case 'FETCH_PHOTOS_FAILURE':
      return {
        photos: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
