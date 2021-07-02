
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import Modal from "react-native-simple-modal";
{/*import AsyncStorage from "@react-native-async-storage/async-storage"*/}



const Rewards = [
  { name: "Get a coupon for your local farmer's market", image: require('../assets/market.png'), price:20, id: 1 },
  { name: 'Buy some vegetables seeds', price: 30, image: require('../assets/sprout.png'), id: 2 },
  { name: 'Buy a cup with  the "HLevel" logo', price: 45, image: require('../assets/cup.png'), id: 3 },
  { name: 'Buy the 4ocean Bracelet', price: 85, image: require('../assets/1.png'), id: 4 },
  { name: 'Buy a T-shirt with the "HLevel" logo', price: 50, image: require('../assets/Imagine.png'), id: 5 },
  { name: 'Get a free session with a nutritionist', price: 120, image: require('../assets/nutrition.png'), id: 6 },
  { name: 'Get a 30% discount on Mega Image', price: 80, image: require('../assets/mega_image.png'), id: 7 },
  { name: "Get a free yoga session", price: 30, image: require('../assets/yoga.png'), id: 8 },

];

const Points ={points:'8400'}

class Reward extends React.Component {

    constructor(props){
        super(props);
        this.state = { open: false,
            Points: 8400,
            data:Rewards,
            selectedId:-1
            };
    }
 

decrementValue = ()=>{

    const rewardPrice=Rewards.find(item=>item.id===this.state.selectedId).price;
  this.setState({Points:this.state.Points - rewardPrice})     
}


  modalDidClose = () => {
    this.setState({ open: false});
  };
  async openModal(id)
  {
     await this.setState({ open: true, selectedId:id});
      console.log(this.state.selectedId);
    };

  closeModal = () => this.setState({ open: false});


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
          <ImageBackground style={styles.imageBackground} source={require('../assets/background.jpg')}>
            <View style={styles.CircleShape}><Text style={{ fontSize: 20, color: '#FFFFFF', textAlign: 'center', fontWeight: '600',  fontFamily:'Gill Sans' }}>{this.state.Points}</Text>
              <Text style={{ fontSize: 11, color: '#FFFFFF', textAlign: 'center', fontWeight: '500',  fontFamily:'Gill Sans' }}> points</Text></View>
            <Text style={{ color: '#000814', textAlign: 'center', paddingTop: 20, marginLeft: -20, fontSize: 20,  fontFamily:'Gill Sans' }}>   Choose your reward !</Text>
          </ImageBackground>
        </View>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={this.state.data}
          renderItem={({ item }) => (
            <View style={styles.task}>
              <Image style={styles.itemImage} source={item.image} />
              <Text style={styles.item}>{item.name}</Text>
              <View style={styles.pointsWrapper}>
                <TouchableOpacity onPress={()=>{this.setState({open:true});this.openModal(item.id)}}>
                  <Text style={styles.points}> {item.price} points</Text>
                </TouchableOpacity>

              </View></View>
          )}
        />
        <Modal
          offset={this.state.offset}
          open={this.state.open}
          useNativeDriver
          modalDidOpen={this.UNSAFE_modalDidOpen}
          modalDidClose={this.UNSAFE_modalDidClose}
          style={styles.popup}
        >
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 20, marginBottom: 10, textAlign:'center',  fontFamily:'Gill Sans' }}>Are you sure that you want to buy this reward?</Text>
            <TouchableOpacity style={{margin: 5}}   onPressIn={this.decrementValue} onPressOut ={this.closeModal}>
              <Text style={styles.yesno}>{'\u2728'}  Yes  {'\u2728'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{ margin: 5 }} onPress={this.closeModal}>
              <Text style={styles.yesno}>🙈 No  🙈</Text>
            </TouchableOpacity>
          </View>
        </Modal>
  
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
    color: '#9a031e',
    fontSize: 10,
    fontWeight: '500',
    fontFamily:'Gill Sans'

  },
  imageBackground:
  {
    width: '100%',
    height: '100%',
    alignSelf: 'stretch',
    resizeMode: 'cover'
  },
popup:
{
  alignContent:'center',
  borderRadius: 15,
},
yesno:{
  color:'#BC4749',
  fontSize:20,
  fontFamily:'Gill Sans'
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
    textAlign: 'center',
    //fontWeight: '800',
    fontFamily:'GillSans-Bold',
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
    marginLeft: -25,
    marginTop: 20
  },
}); export default Reward;
