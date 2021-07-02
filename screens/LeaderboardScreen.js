import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import {Image} from 'react-native';

// import Modal from "react-native-simple-modal";


const LeaderBoard = [
  { name: 'Georgia', image: require('../assets/georgia.png'), score: 340, id: 1 },
  { name: 'Nicoleta',image: require('../assets/nicoleta.png'), score: 320, id: 2 },
  { name: 'Andreea', image: require('../assets/andreea.png'), score: 285, id: 3 },
  { name: 'Lupino', image: require('../assets/lupino.png'), score: 245,  id: 4 },
  { name: 'Anca', image: require('../assets/anca.png'), score: 239, id: 5 },
  { name: 'Diana', image: require('../assets/diana.png'), score: 222, id: 6 },
  { name: 'User', image: require('../assets/user.png'), score: 212, id: 7 },
  { name: 'User', image: require('../assets/user.png'), score: 143, id: 8 },
  { name: 'User', image: require('../assets/user.png'), score: 137, id: 9 },
  { name: 'User', image: require('../assets/user.png'), score: 104, id: 10 },
  { name: 'User', image: require('../assets/user.png'), score: 104, id: 11 },

];

const Points ={points:'8400'}

class Leaderboard extends React.Component {

    constructor(props){
        super(props);
        this.state = { open: false,
            Points: 8400,
            data:LeaderBoard,
            selectedId:-1
            };
    }
 


  render() {

    return (


      <SafeAreaView style={styles.container}>



        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
          keyboardShouldPersistTaps='handled'>
        </ScrollView>
        <View style={styles.titleWrapper}>
          <ImageBackground style={styles.imageBackground} source={require('../assets/verde.png')}>
            <View ><Text style={{ fontSize: 35, color: '#FFFFFF', textAlign: 'center', justifyContent: 'centre', marginTop: 30, fontWeight: '600',  fontFamily:'Gill Sans' }}>LeaderBoard</Text>
              </View>
            <Text style={{ color: '#000814', textAlign: 'center', paddingTop: 5, textAlign:'center',  fontFamily:'Gill Sans' }}> 🎈  Be your own hero today! 🎈</Text>
          </ImageBackground>
        </View>
        <FlatList
          numColumns={0}
          keyExtractor={(item) => item.id}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.task}>
               <View style={{flexDirection:'row'}}>
              <Text style={styles.itemid}>{item.id}</Text>
              <Image style={styles.itemImage} source={item.image} />
              <View style={{flexDirection:'column'}}>
              <Text style={styles.item}>{item.name}</Text>


                <TouchableOpacity onPress={()=>{this.setState({open:true});this.openModal(item.id)}}>
                  <Text style={styles.points}> {item.score} points</Text>
                </TouchableOpacity>
                </View>
                <Image style={styles.stele} source={require('../assets/steluta.png')} />
              </View></View>
          )}
        />
        
  
     </SafeAreaView>
    );
  }
}

const width = Dimensions.get('window').width - 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    //paddingHorizontal: 8,
    backgroundColor: '#F7FFF6',
    paddingLeft: 40,
    paddingRight: 40,
   
  },
  points: {
    color: '#8491A3',
    fontSize: 14,
    fontWeight: '600',
    fontFamily:'Gill Sans',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 15
  },
  imageBackground:
  {
    width: '100%',
    height: '90%',
    alignSelf: 'stretch',
    resizeMode: 'cover'
  },

  // idWrapper:
  // {
  //   height: 25,
  //   width: 25,
  //   paddingTop: 1,
  //   backgroundColor: '#87D68D',
  //   borderRadius: 10,
  //   alignContent: 'center',
  //   justifyContent: 'center',
  //   marginLeft: 15,
  //   marginTop: 25,
  //   marginRight:20
  // },
  stele:
  {
   width: 30,
   height: 30,
   marginTop: 20
  },

  itemImage:
  {
    width: 55,
    height: 55,
    marginTop: 10
  },
  titleWrapper: {
    overflow: 'hidden',
    height: 130,
   // width: 400
  },
  task:
  {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
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
    paddingTop: 1,

    //backgroundColor: '#D0D5DC',
    fontSize: 17,
    textAlign: 'center',
    //fontWeight: '800',
    fontFamily:'GillSans-Bold',
    alignItems: 'center',
    width: width / 2,
    justifyContent: 'center',
    marginTop: 15
  },
  itemid:
  {
   paddingTop: 1,
   fontSize: 23,
   textAlign: 'center',
   alignItems:'center',
   justifyContent: 'center',
   fontWeight: '600',
   fontFamily:'Gill Sans',
   marginLeft: 15,
    marginTop: 25,
    marginRight:20
  },

  logo: {
    width: 30,
    height: 30,

  },
 
}); export default Leaderboard;