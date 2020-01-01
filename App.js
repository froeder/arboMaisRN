import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import MainScreen from './screen/Login/MainScreen';

export default function Main() {
  return (
    <PaperProvider>
      <MainScreen />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('main', () => Main);