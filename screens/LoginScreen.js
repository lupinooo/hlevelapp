import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {MaterialCommunityIcons } from "@expo/vector-icons"
import { StyleSheet, Text, View, Button } from 'react-native';

class Login extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button title="Go to register" onPress={()=>this.props.navigation.navigate('Register')}/>
        <Button title="Go to app" onPress={()=>this.props.navigation.navigate('App')}/>
        <MaterialCommunityIcons name='account'/>
        <StatusBar style="auto" />
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;