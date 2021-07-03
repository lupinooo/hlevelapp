import { StatusBar } from 'expo-status-bar';
import React, {useState,e, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, FlatList, TouchableOpacity, Modal, Animated,Pressable, Alert, TextInput, Button, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const task = [
  { name: 'Volunteer for a local NGO!', shortDescription: 'Volunteer as an English teacher for foster children and help your local community.', points: 1500,image:require('../assets/task0.jpg'), id: 1 },
  { name: 'Cook a healthy meal!', shortDescription: 'Cook yourself a meal with healthy foods from your local market.', points: 350, image:require('../assets/task1.png'), id: 2 },
  { name: 'Plant a tree!', shortDescription: 'Plant a tree in a local park, in your own backyard or in any place that needs an extra boost of oxygen.', points: 500, image:require('../assets/task2.png'),id: 3 },
  { name: 'Donate to a local animal shelter!', shortDescription: 'Donate food, treats, toys or other items to a local animal shelter. ', points: 600,image:require('../assets/task3.png'),id: 4 },
  { name: 'Run 5km!', shortDescription: 'Take the chance and run 5km in a marathon or by yourself.', points: 550,image:require('../assets/task4.png'),id: 5 },
  { name: 'Zero waste day!', shortDescription: 'Be mindful of what you are consuming and try living a day with zero waste.', points: 450,image:require('../assets/task5.png'),id: 6 },
  { name: 'Donate blood!', shortDescription: 'Blood is always needed in hospitals and this is a great opportunity to save a life', points: 1000,image:require('../assets/task6.png'),id: 7 },
  { name: 'Upcycle a piece of clothing!', shortDescription: "Give new life to those pieces that aren't worthy of the donation bin.Upcycling creatively transforms the products you already own in order to cut down on waste.", points: 200,image:require('../assets/task7.jpg'),id: 8 },
]
const tick= require('../assets/tick.png');

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

function Item({ item }) {
  const [visible, setVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.task}>
      
      <View style={{alignItems:'center', flex:1.5}}><Image source={item.image}  style={{width:60, height:60,borderRadius:10, marginTop:10, marginLeft:10,marginRight: 10,justifyContent:'center', alignContent:'center'}} /></View>
      <View style={{alignItems:"center",flex:3}}>
        <Text style={{fontWeight:"bold", fontSize:16, marginTop:20,fontFamily:'Gill Sans', justifyContent:'center', alignContent:'center', textAlign:'center'}}>{item.name}</Text>
        <Text style={{fontSize:10, fontFamily:'Gill Sans', marginRight:5}}>{item.shortDescription}</Text>
        <Text style={styles.points}>{item.points} points</Text>
      </View>
      <TouchableOpacity style={{height:50,width:50, justifyContent:"center",alignItems:"center"}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={item.image}
            style={{height: 100, width: 100, marginVertical: 5}}
          />
        </View>

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center',fontFamily:'Gill Sans'}}>
         {item.shortDescription}
        </Text>
        <TextInput placeholder="Write about your experience!" style={{height:150, width:250, backgroundColor:'#BCEBCB', alignSelf:'center', borderRadius:20, paddingLeft:10, marginBottom:10, color:'white'}} />
        <Pressable onPress={pickImage}><Image source={require('../assets/camera.png')} style={{width: 40, height:40, alignSelf:'center'}}/></Pressable>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <View style={{flexDirection:'row'}}>
        <View style={styles.Close}>
          <Pressable onPress={()=> setVisible(false)}>
          <Image source={require('../assets/x.png')} style={{width:30, height:30, alignSelf:'center'}}/></Pressable>
        </View>
        <View style={styles.Open}>
      <Pressable
        style={{color:'#BC4749',fontSize:18, textAlign:'center'}}
        onPress={() => setModalVisible(true)}
      >
        <Image source={require('../assets/tick.png')} style={{width:40, height:40, alignSelf:'center'}}/>
        </Pressable></View></View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}> 🎉 Congratulations you finished this task ! 🎉</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible);setVisible(false)}}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      </ModalPoup>
      <View style={{flexDirection:'column', flex:1,justifyContent: 'center',alignItems:'center'}}>
      <TouchableOpacity style={styles.DoIt} onPress={()=> setVisible(true)}>
        <Text style={{color:'#FFFFFF', fontWeight:'600'}}>Do it!</Text>
      </TouchableOpacity>
      </View>
      </View>
      </TouchableOpacity>
    </View>
  );
}

class Task extends React.Component {
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
          <View style={styles.headerText}><Text style={{fontSize:35,fontFamily:'Gill Sans',color:'#FFFFFF', fontWeight:"600", textAlign:'center'}}> Tasks</Text>
          <Text style={{fontFamily:'Gill Sans', textAlign:'center'}}>🥳 Challenge yourself everyday 🥳 </Text></View>
        </View>
        <FlatList
        numColumns = {0}
        heyExtractor ={(item) => item.id}
        data = {task}
        renderItem={({item}) => <Item item={item}/>}
        />
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 40,
    backgroundColor: '#F7FFF6',
    paddingLeft: 40,
    paddingRight: 40,
  },
  headerText:
  {
    color: '#000814',
    textAlign: 'center',
    fontSize: 20,
    fontFamily:'Gill Sans'
  },
  titleWrapper: {
    overflow: 'hidden',
    height: 100,
    display: 'flex',
    paddingTop: 20,
    backgroundColor:'#87D68D',
  },
  itemImage:
  {
    width: 80,
    height: 80,
    marginTop: 10
  },
  task:
  {
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    paddingBottom: 10,
    flex:1,
    flexDirection:'row',
    marginBottom:10,
    justifyContent:'space-evenly',
    alignContent:'center'
  },
  points:{
    fontSize:12,
    color:'#BC4749',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    fontFamily:'Gill Sans',
    marginTop:5
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Close:
  {
    height: 40,
    width: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  Open:
  {
    height: 40,
    width: 40,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginLeft:180
  },
  DoIt:
  {flexDirection:'row',
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    height: 45,
    width: 45,
    backgroundColor: '#87D68D',
    borderRadius: 15,
    marginTop: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#BCEBCB",
  },
  buttonClose: {
    backgroundColor: "#BCEBCB",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily:'Gill Sans'
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontFamily:'Gill Sans'
  }
}); export default Task;
