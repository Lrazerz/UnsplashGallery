import React from 'react';
import {SafeAreaView} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {HomeScreen, PhotoDetailsScreen} from './src/screens';
import {UnsplashServiceProvider} from './src/context';
import UnsplashService from './src/services';
import store from './src/redux/store';

const unsplashService = new UnsplashService();

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  PhotoDetails: {screen: PhotoDetailsScreen},
});

const AppContainer = createAppContainer(MainNavigator);

const App = () => (
  <Provider store={store}>
    <UnsplashServiceProvider value={unsplashService}>
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    </UnsplashServiceProvider>
  </Provider>
);

export default App;
