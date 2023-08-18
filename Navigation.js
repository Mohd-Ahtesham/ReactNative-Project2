import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import Colors from './Ui/color';
import {Hamburger, MagnifineGlass} from './Assest/svgs';

const Navigation = () => {
  return (
    <View style={styles.innerContainer}>
      <View style={styles.Hamburger}>
        <Hamburger />
      </View>
      <View style={styles.input}>
        <MagnifineGlass style={styles.icon} />
        <TextInput placeholder="Search product" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.whiteSmoke,
  },
  Hamburger: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
    backgroundColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.84,
    elevation: 4,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
  },
  icon: {
    paddingLeft: 50,
  },
});
export default Navigation;
