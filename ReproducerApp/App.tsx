/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.roundedView} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: 200, height: 200, backgroundColor: 'white', padding: 50},
  roundedView: {
    width: 30,
    height: 30,
    backgroundColor: 'blue',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'white',
    borderStyle: 'solid',
  },
});

export default App;
