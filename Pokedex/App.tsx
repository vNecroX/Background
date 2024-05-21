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
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { StatusBar } from 'expo-status-bar';
import PokemonList from './src/components/PokemonList';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PokemonList />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;