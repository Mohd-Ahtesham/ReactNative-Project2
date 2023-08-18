import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Colors from './Ui/color';
import {TopDown, Filter} from './Assest/svgs';
const Title = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.Text}>Sneakers</Text>
        <View style={styles.icon}>
          <TopDown />
          <Filter />
        </View>
      </View>
      <Text style={{paddingLeft: 20, paddingTop: 7}}>25 products found</Text>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  Text: {
    color: Colors.black,
    fontWeight: 'bold',
    fontSize: 37,
    paddingLeft: 20,
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 7,
    paddingRight: 20,
  },
});
export default Title;
