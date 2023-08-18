import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Navigation from './Navigation';
import Colors from './Ui/color';
import Title from './Title';
import Sneakers from './Sneakers';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
      <Title />
      <Sneakers />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.whiteSmoke,
  },
});

export default App;
