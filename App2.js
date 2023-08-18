import React, {useCallback, useRef} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
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
  {
    name: 'hello9',
    id: 8,
  },
  {
    name: 'hello10',
    id: 9,
  },
  {
    name: 'hello11',
    id: 10,
  },
  {
    name: 'hello12',
    id: 11,
  },
  {
    name: 'hello13',
    id: 12,
  },
  {
    name: 'hello14',
    id: 13,
  },
];

const App = () => {
  const flatListRef = useRef(null);

  const listUI = useCallback(({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  }, []);

  const scrollToTop = () => {
    flatListRef.current.scrollToIndex({index: 0, animated: true});
  };

  const scrollToBottom = () => {
    const itemCount = List.length;
    flatListRef.current.scrollToIndex({index: itemCount - 1, animated: true});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={List}
        renderItem={listUI}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <TouchableOpacity onPress={scrollToBottom} style={styles.button}>
            <Text>'Scroll to Bottom'</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={() => (
          <TouchableOpacity onPress={scrollToTop} style={styles.button}>
            <Text>'Scroll to Top'</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 90,
  },
  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
