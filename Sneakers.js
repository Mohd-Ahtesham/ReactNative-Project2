/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Colors from './Ui/color';
import {
  Nike1,
  Nike2,
  Nike3,
  Nike4,
  Nike5,
  Nike6,
  Nike8,
  Load,
  Heart,
  Heart2,
} from './Assest/svgs';
import LottieView from 'lottie-react-native';

const DATA = [
  {
    id: 1,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike1 />,
    price: '$96',
    heart: <Heart />,
  },
  {
    id: 2,
    heading: 'Converse',
    subheadhing: 'Run Star Hike Three Color Unisex',
    image: <Nike2 />,
    price: '$85.5',
    heart: <Heart />,
  },
  {
    id: 3,
    heading: 'Nike',
    subheadhing: 'Air Jordan 1 Retro High Obsidian UNC ',
    image: <Nike3 />,
    price: '$196',
    heart: <Heart />,
  },
  {
    id: 4,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike4 />,
    price: '$115',
    heart: <Heart />,
  },
  {
    id: 5,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike5 />,
    price: '$96',
    heart: <Heart />,
  },
  {
    id: 6,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike6 />,
    price: '$96',
    heart: <Heart />,
  },
  {
    id: 7,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike2 />,
    price: '$55',
    heart: <Heart />,
  },
  {
    id: 8,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike8 />,
    price: '$196',
    heart: <Heart />,
  },
  {
    id: 9,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike3 />,
    price: '$296',
    heart: <Heart />,
  },
  {
    id: 10,
    heading: 'Nike',
    subheadhing: 'Air Force 1 Jester XX Black Sonic Yellow ...',
    image: <Nike6 />,
    price: '$396',
    heart: <Heart />,
  },
];

let Call = () => {
  const [isChecked, setChecked] = useState(true);
  const checkedBox = () => {
    if (isChecked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <TouchableOpacity onPress={checkedBox}>
      <View style={styles.heart}>
        {isChecked && <Heart />}
        {!isChecked && (
          <LottieView
            source={require('./Assest/svgs/heart.json')}
            autoPlay
            loop={false}
            style={styles.lotte}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};
const Sneakers = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.irender}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.shoes}>{item.image}</View>

              <Call />
            </View>
            <Text style={styles.title}>{item.heading}</Text>
            <Text style={styles.subheadhing}>{item.subheadhing}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingTop: 20,
  },
  irender: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    marginRight: 20,
  },
  shoes: {
    paddingHorizontal: 15,
    paddingTop: 35,
  },
  heart: {
    position: 'absolute',
    right: 7,
    top: 20,
    padding: 7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  subheadhing: {
    fontSize: 13,
    flexWrap: 'wrap',
    paddingTop: 7,
    paddingHorizontal: 15,
  },
  price: {
    fontSize: 13,
    paddingTop: 7,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  lotte: {
    position: 'relative',
    top: -5,
    left: 2,
    height: 25,
    width: 25,
  },
});
export default Sneakers;
