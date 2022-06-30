import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, ActivityIndicator} from 'react-native';

import AppNavigator from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
