import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
  FlatList,
} from 'react-native';

const ItemList = ({data, navigation}) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => (
        <TouchableHighlight
          style={styles.container}
          onPress={() =>
            navigation.navigate('PhotoDetails', {itemId: item.id})
          }>
          <Image source={{uri: `${item.url}`}} style={styles.image}/>
        </TouchableHighlight>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const calcAppropriateSizes = () => {
  const windowSize = Dimensions.get('window');
  return {
    itemWidth: windowSize.width / 2.1,
    itemHeight: windowSize.height / 5.1,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  image: {
    width: calcAppropriateSizes().itemWidth,
    height: calcAppropriateSizes().itemHeight,
    resizeMode: 'cover',
    marginTop: 15,
  },
});

export default ItemList;
