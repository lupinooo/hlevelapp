import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Image, TouchableOpacity,StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Category from './Explore/Category';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Avatar,
  Title,
  Caption,
 
  TouchableRipple,
} from 'react-native-paper';
import imag from '../assets/task4.png';
import imag2 from '../assets/task2.png'
import imag3 from '../assets/task5.png';
import imag4 from '../assets/task3.png';
import bratara from '../assets/1.png';
import seminte from '../assets/sprout.png';
import yoga from '../assets/yoga.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ProfileScreen extends React.Component{
  render(){
return(
<SafeAreaView style={styles.container}>
<ScrollView>
<View style={styles.userInfoSection}>
  <View style={{flexDirection: 'row', marginTop: 15}}>
    <Avatar.Image 
      source={{
        uri: 'https://image.flaticon.com/icons/png/512/4322/4322993.png',
      }}
      size={80}
    />
    <View style={{marginLeft: 20}}>
      <Title style={[styles.title, {
        marginTop:15,
        marginBottom: 5,fontFamily:"Gill Sans",
      }]}>User Name</Title>
      <Caption style={styles.caption}>@user_name</Caption>
    </View>
  </View>
</View>

<View style={styles.userInfoSection}>
  <View style={styles.row}>
    <Icon name="map-marker-radius" color="#87D68D" size={20}/>
    <Text style={{color:"#777777",fontFamily:"Gill Sans", marginLeft: 20}}>Bucharest,Romania</Text>
  </View>
  <View style={styles.row}>
    <Icon name="phone" color="#87D68D" size={20}/>
    <Text style={{color:"#777777",fontFamily:"Gill Sans", marginLeft: 20}}>0712345678</Text>
  </View>
  <View style={styles.row}>
    <Icon name="email" color="#87D68D" size={20}/>
    <Text style={{color:"#777777",fontFamily:"Gill Sans", marginLeft: 20}}>user@email.com</Text>
  </View>
</View>

<View style={styles.infoBoxWrapper}>
    <View style={[styles.infoBox, {
      borderRightColor: '#87D68D',
      borderRightWidth: 1,fontFamily:"Gill Sans",
    }]}>
      <Title>140</Title>
      <Caption>Score</Caption>
    </View>
    <View style={styles.infoBox}>
      <Title>12</Title>
      <Caption>Place in Leaderboard</Caption>
    </View>
</View>

<View style={styles.menuWrapper}>
  <TouchableRipple >
    <View style={styles.menuItem}>
      <Icon name="order-bool-descending-variant" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Challenges</Text>
    </View>
  </TouchableRipple>
  {/* <TouchableRipple >
    <View style={styles.menuItem}>
      <Icon name="seal-variant" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Tasks</Text>
    </View>
  </TouchableRipple> */}
   <TouchableRipple >
    <View style={styles.menuItem}>
      <Icon name="sprout" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Tasks</Text>
    </View>

  </TouchableRipple>
  <View style={{ backgroundColor: '#F7FFF6'}}>
                                          <View style={{fontFamily:"Gill Sans", height: 130, marginTop: 10,marginBottom:10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category  imageUri={imag}
                                        name="Run 5 km"
                                    />
                                    <Category  imageUri={imag2}
                                        name="Plant a tree"
                                    />
                                    <Category imageUri={imag3}
                                        name="Zero-waste day"
                                    />
                                      <Category imageUri={imag4}
                                        name="Donate to a local animal shelter"
                                    />
                                </ScrollView>
                            </View>
                            </View>
   <TouchableRipple >
    <View style={styles.menuItem}>
      <Icon name="seal-variant" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Rewards</Text>

    </View>

  </TouchableRipple> 
  <View style={{ backgroundColor: '#F7FFF6',fontFamily:"Gill Sans"}}>
                                          <View style={{ height: 130, marginTop: 10 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category  imageUri={yoga}
                                        name="Free yoga session"
                                    />
                                    <Category  imageUri={bratara}
                                        name="4ocean bracelet"
                                    />
                                    <Category imageUri={seminte}
                                        name="Vegetable seeds"
                                    />
                                </ScrollView>
                            </View>
                            </View>

  <TouchableRipple >
    <View style={styles.menuItem}>
      <Icon name="account-check-outline" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>Edit Profile</Text>
    </View>

  </TouchableRipple>
</View>

</ScrollView>
</SafeAreaView>
);}
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {fontFamily:"Gill Sans",
    flex: 1,
      backgroundColor :'#F7FFF6',
  },
  userInfoSection: {fontFamily:"Gill Sans",
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {fontFamily:"Gill Sans",
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {fontFamily:"Gill Sans",
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {fontFamily:"Gill Sans",
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {fontFamily:"Gill Sans",
    borderBottomColor: '#87D68D',
    borderBottomWidth: 1,
    borderTopColor: '#87D68D',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {fontFamily:"Gill Sans",
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {fontFamily:"Gill Sans",
    marginTop: 10,
  },
  menuItem: {fontFamily:"Gill Sans",
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {fontFamily:"Gill Sans",
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
