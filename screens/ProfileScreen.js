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
import imag from 'C:\Users\diana\hlevelapp\assets\food.png';
const ProfileScreen = () => {
return(
<SafeAreaView style={styles.container}>

<View style={styles.userInfoSection}>
  <View style={{flexDirection: 'row', marginTop: 15}}>
    <Avatar.Image 
      source={{
        uri: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
      }}
      size={80}
    />
    <View style={{marginLeft: 20}}>
      <Title style={[styles.title, {
        marginTop:15,
        marginBottom: 5,
      }]}>User Name</Title>
      <Caption style={styles.caption}>@user_name</Caption>
    </View>
  </View>
</View>

<View style={styles.userInfoSection}>
  <View style={styles.row}>
    <Icon name="map-marker-radius" color="#87D68D" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>Bucharest,Romania</Text>
  </View>
  <View style={styles.row}>
    <Icon name="phone" color="#87D68D" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>0712345678</Text>
  </View>
  <View style={styles.row}>
    <Icon name="email" color="#87D68D" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>user@email.com</Text>
  </View>
</View>

<View style={styles.infoBoxWrapper}>
    <View style={[styles.infoBox, {
      borderRightColor: '#87D68D',
      borderRightWidth: 1
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
  <TouchableRipple onPress={() => {}}>
    <View style={styles.menuItem}>
      <Icon name="order-bool-descending-variant" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Challenges</Text>
    </View>
  </TouchableRipple>
  <TouchableRipple onPress={() => {}}>
    <View style={styles.menuItem}>
      <Icon name="trending-up" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>My Progress</Text>
    </View>
  </TouchableRipple>
  {/* <TouchableRipple onPress={myCustomShare}>
    <View style={styles.menuItem}>
      <Icon name="share-outline" color="#FF6347" size={25}/>
      <Text style={styles.menuItemText}>Tell Your Friends</Text>
    </View>
  </TouchableRipple> */}
  <TouchableRipple onPress={() => {}}>
    <View style={styles.menuItem}>
      <Icon name="account-check-outline" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>Edit Profile</Text>
    </View>
  </TouchableRipple>
  <TouchableRipple onPress={() => {}}>
    <View style={styles.menuItem}>
      <Icon name="vanish" color="#87D68D" size={25}/>
      <Text style={styles.menuItemText}>Settings</Text>
    </View>
  </TouchableRipple>
</View>
<View style={{ flex: 1, backgroundColor: 'white'}}>
                                          <View style={{ height: 130, marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category  imageUri={imag}
                                        name="Task1"
                                    />
                                    <Category  imageUri={imag}
                                        name="Task2"
                                    />
                                    <Category imageUri={imag}
                                        name="Task3"
                                    />
                                </ScrollView>
                            </View>
                            </View>
   
</SafeAreaView>
);
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor :'#F7FFF6',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#87D68D',
    borderBottomWidth: 1,
    borderTopColor: '#87D68D',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});
