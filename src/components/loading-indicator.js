import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={70} color="#0000ff" />
      <View style={styles.loadingText}>
        <Text>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    width: 80,
    marginTop: 20,
  },
});

export default LoadingIndicator;
