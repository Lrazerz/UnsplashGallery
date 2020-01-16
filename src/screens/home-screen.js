import React from 'react';
import ItemListContainer from '../components/containers/item-list-container';

const HomeScreen = props => {
  return <ItemListContainer navigation={props.navigation} />;
};

export default HomeScreen;
