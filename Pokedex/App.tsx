/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import PokemonList from './src/components/PokemonList';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <PokemonList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;