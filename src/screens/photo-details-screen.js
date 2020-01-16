import React from 'react';
import ItemDetailsContainer from '../components/containers/item-details-container';

const PhotoDetailsScreen = ({navigation}) => {
  return <ItemDetailsContainer itemId={navigation.getParam('itemId', 1)} />;
};

export default PhotoDetailsScreen;
