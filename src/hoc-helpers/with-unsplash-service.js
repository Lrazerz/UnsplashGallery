import React from 'react';
import {UnsplashServiceConsumer} from '../context';

const withUnsplashService = Wrapped => {
  return props => {
    return (
      <UnsplashServiceConsumer>
        {unsplashService => (
          <Wrapped {...props} unsplashService={unsplashService} />
        )}
      </UnsplashServiceConsumer>
    );
  };
};

export default withUnsplashService;
