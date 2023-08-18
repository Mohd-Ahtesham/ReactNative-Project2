import React, {useCallback,useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const List = [
  {
    name: 'hello1',
    id: 0,
  },
  {
    name: 'hello2',
    id: 1,
  },
  {
    name: 'hello3',
    id: 2,
  },
  {
    name: 'hello4',
    id: 3,
  },
  {
    name: 'hello5',
    id: 4,
  },
  {
    name: 'hello6',
    id: 5,
  },
  {
    name: 'hello7',
    id: 6,
  },
  {
    name: 'hello8',
    id: 7,
  },
];

// const Item = ({item}) => {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{item.name}</Text>
//     </View>
//   );
// };

const App = () => {
const []

  const listUI = useCallback(({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={List}
        // extraData={List}
        numColumns={4}
        key={4}
        renderItem={listUI}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'red',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 12,
  },
});

export default App;
