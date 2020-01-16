import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import errorImage from '../images/error.png';

const ErrorIndicator = ({error, fetchPhotos}) => {
  const errorMessage = error ? error.message : 'unknown error';
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.errorText}>
          Something went wrong. Error: "{errorMessage}". Check your internet
          connection and try again or contact us.
        </Text>
      </View>
      <View style={styles.reloadButtonWrapper}>
        <Button
          title="Click here to reload"
          onPress={() => fetchPhotos()}
          color="#36303b"
          touchSoundDisabled
        />
      </View>
      <Image source={errorImage} style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#bf1f10',
  },
  errorText: {
    fontSize: 18,
  },
  reloadButtonWrapper: {
    width: '60%',
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});

export default ErrorIndicator;
