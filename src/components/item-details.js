import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const ItemDetails = ({item: {url, description, creator}}) => {
  //don't changing props
  const renderDescription = description || 'photo has no description... :(';
  const renderCreator = creator || 'anonym';
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: url}} />
        <View style={styles.textWrapper}><Text style={styles.descriptionText}>Description: {renderDescription}</Text></View>
        <View style={styles.textWrapper}><Text style={styles.descriptionText}>Creator: {renderCreator}</Text></View>
      </View>
    </ScrollView>
  );
};

const calcAppropriateSizes = () => {
  const windowSize = Dimensions.get('window');
  return {
    itemWidth: windowSize.width / 1.1,
    itemHeight: windowSize.height / 1.4,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'rgb(249,254,255)',
  },
  image: {
    width: calcAppropriateSizes().itemWidth,
    height: calcAppropriateSizes().itemHeight,
    resizeMode: 'contain',
    backgroundColor: '#e1f6f1',
  },
  textWrapper: {
    marginTop: 5,
    width: '100%',
  },
  descriptionText: {
    fontSize: 18,
  },
});

export default ItemDetails;
