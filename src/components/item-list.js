import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

const ItemList = ({data, navigation}) => {
  return (
    <View style={styles.container}>
      {data.map(item => (
        <TouchableHighlight
          onPress={() => navigation.navigate('PhotoDetails', {itemId: item.id})}
          key={item.id}>
          <Image
            source={{uri: `${item.url}`}}
            style={styles.image}
          />
        </TouchableHighlight>
      ))}
    </View>
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
