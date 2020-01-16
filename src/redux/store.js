import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: 'DELAYED_ACTION_TO_PASS_THE_TEST',
      }),
    timeout,
  );
};

store.dispatch(delayedActionCreator(3000));

export default store;
