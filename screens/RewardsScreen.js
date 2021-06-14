import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions } from 'react-native';

export default function Reward() {
  const [rewards, setRewards] = useState([
    { name: 'Unlock 3 tasks from the "Nature" category', image: require('../assets/nature.png'), price: '20 points', id: '1' },
    { name: 'Buy some vegetables seeds', price: '30 points', image: require('../assets/seeds.jpg'), id: '2' },
    { name: 'Buy a cup with  the "HLevel" logo', price: '45 points', image: require('../assets/nature.jpg'), id: '3' },
    { name: 'Buy the 4ocean Bracelet', price: '85 points', image: require('../assets/bracelet.png'), id: '4' },
    { name: 'Buy a T-shirt with the "HLevel" logo', price: '50 points', image: require('../assets/nature.jpg'), id: '5' },
    { name: 'Get a free session with a nutritionist', price: '120 points', image: require('../assets/nature.jpg'), id: '6' },
    { name: '30% discount on Mega Image', price: '80 points', image: require('../assets/nature.jpg'), id: '7' },
    { name: 'Donate for children s food from Africa', price: '30 points', image: require('../assets/nature.jpg'), id: '8' },
    { name: 'Custom picture frame', price: '30 points', image: require('../assets/nature.jpg'), id: '9' }
  ]);

  return (
    <SafeAreaView style={styles.container}>


      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'>
      </ScrollView>
      <View style={styles.titleWrapper}>
        <ImageBackground style={styles.imageBackground} source={require('../assets/background.jpg')}>
          <View style={styles.CircleShape}><Text style={{ fontSize: 15, color:'#FFFFFF',textAlign:'center', fontWeight:'600' }}>8400</Text>
          <Text style={{ fontSize: 10, color:'#FFFFFF',textAlign:'center', fontWeight:'500' }}> points</Text></View>
            <Text style={{ fontFamily: 'Baskerville', color: '#000814', textAlign: 'center', paddingTop:20,marginLeft:-20, fontSize:20 }}>   Choose your reward !</Text>
        </ImageBackground>
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={rewards}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Image style={styles.itemImage} source={item.image} />
            <Text style={styles.item}>{item.name}</Text>
            <View style={styles.pointsWrapper}><Text style={styles.points}> {item.price} </Text>
            </View></View>
        )}
      />

    </SafeAreaView>
  );
}

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 40,
    backgroundColor: '#F7FFF6',
    paddingLeft: 40,
    paddingRight: 40,
  },
  points: {
    color: '#9a031e',
    fontSize: 7,
    fontWeight: '500'

  },
  imageBackground:
  {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
    resizeMode: 'cover'
  },

  pointsWrapper:
  {
    height: 20,
    width: 50,
    backgroundColor: '#BCEBCD',
    borderRadius: 15,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  itemImage:
  {
    width: 80,
    height: 80,
    marginTop: 10
  },
  titleWrapper: {
    overflow: 'hidden',
    height: 150,
    width: 400
  },
  task:
  {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    //backgroundColor: '#D0D5DC',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    // marginHorizontal: 10,
    // marginTop: 80,
    // borderRadius: 10,
    overflow: 'hidden',
    paddingTop: 15,

    //backgroundColor: '#D0D5DC',
    fontSize: 10,
    fontFamily: 'Baskerville',
    textAlign: 'center',
    fontWeight: '800',
    alignItems: 'center',
    width: width / 2,
  },
  logo: {
    width: 30,
    height: 30,

  },
  CircleShape: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#BC4749',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginLeft:-25,
    marginTop:20
  },
});
