/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import PokemonList from './src/components/PokemonList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View style={styles.container}>
          <PokemonList />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
    //paddingTop: StatusBar.currentHeight || 0, // Add padding top to safe area
  },
  container: {
    flex: 1
  },
});

export default App;