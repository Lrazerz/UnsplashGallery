import React from 'react';
import UnsplashService from '../services';

const unsplashService = new UnsplashService();

const {
  Provider: UnsplashServiceProvider,
  Consumer: UnsplashServiceConsumer,
} = React.createContext(unsplashService);

export {UnsplashServiceProvider, UnsplashServiceConsumer};
