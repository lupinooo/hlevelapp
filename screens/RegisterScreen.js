import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
// import {MaterialCommunityIcons} from '@expo/vector-icons';

class Register extends React.Component {

  render () {

  return (
    <View style={{backgroundColor:'#F7FFF6',height:'100%'}}>
  
    <View>
      <Image source ={require('../assets/logo-cerc.png')}
        style = {{
          width:70,
          height:70,
          alignSelf: 'center',
          marginTop: 65,
        }}
      />
    </View>
      
    {/*Create an account*/}
        <Text 
          style={{
            fontSize: 37,
            alignSelf: 'center',
            paddingTop: 25,
            color: '#2A8D4A',
          }}
        >Create an account</Text>
        
        <View style={{
          flexDirection:'row',
           alignItems: 'center',
          marginHorizontal: 50,
          borderWidth: 1,
          marginTop: 20,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
        }}
        > 
            <Icon name="user" color="#46505D" size={20} />

             
             <TextInput
              placeholder="full name"
              style={{
                paddingLeft: 10,
              }}
            />          
        </View> 

        <View style={{
          flexDirection:'row',
           alignItems: 'center',
          marginHorizontal: 50,
          borderWidth: 1,
          marginTop: 12,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
        }}
        > 
            <Icon name="phone" color="#46505D" size={20} />

             
             <TextInput
              placeholder="phone number"
              style={{
                paddingLeft: 10,
              }}
            />          
        </View> 
        
        <View style={{
          flexDirection:'row',
           alignItems: 'center',
          marginHorizontal: 50,
          borderWidth: 1,
          marginTop: 12,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
        }}
        > 
            <Icon name="earth" color="#46505D" size={20} />

             
             <TextInput
              placeholder="country"
              style={{
                paddingLeft: 10,
              }}
            />          
        </View> 

        <View style={{
          flexDirection:'row',
           alignItems: 'center',
          marginHorizontal: 50,
          borderWidth: 1,
          marginTop: 12,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
        }}
        > 
            <Icon name="mail" color="#46505D" size={20} />

             
             <TextInput
              placeholder="email"
              style={{
                paddingLeft: 10,
              }}
            />          
        </View> 
      
        <View style={{
          flexDirection:'row',
          alignItems: 'center',
          marginHorizontal: 50,
          marginTop: 12,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
          borderWidth: 1,
        }}
        >
            <Icon name="lock" color="#46505D" size={20} />

             
            <TextInput
             placeholder="password"
             style={{
              paddingLeft: 10,
             }}
            />
           
        </View> 

        <View style={{
          flexDirection:'row',
          alignItems: 'center',
          marginHorizontal: 50,
          marginTop: 12,
          paddingHorizontal:15,
          borderColor: '#8491A3',
          borderRadius: 23,
          paddingVertical: 6,
          borderWidth: 1,
        }}
        >
            <Icon name="lock" color="#46505D" size={20} />

             
            <TextInput
             placeholder="confirm password"
             style={{
              paddingLeft: 10,
             }}
            />
           
        </View> 
        
  {/* REGISTER */}
        <View style={{
          marginHorizontal: 50,
          alignItems: 'center',
          justifyContent:'center',
          marginTop: 22,
          backgroundColor: '#2A8D4A',
          paddingVertical: 12,
          borderRadius: 23,
        }}>
            <Text style={{
              color: '#F7FFF6',
              alignSelf: 'center',
              fontSize: 17,
            }}
            >Register</Text>
        </View>
   

            {/*Already have an account?*/}
            <View>
              <Text style={{
              color: '#46505D',
              alignSelf: 'center',
              fontSize: 13,
              marginTop: 30,
              opacity: 0.8,
              }}
              >Already have an account?</Text>
            </View>

            {/* Login */}
            <View style={{
          marginHorizontal: 50,
          alignItems: 'center',
          justifyContent:'center',
          marginTop: 8,
          backgroundColor: '#A1E3B6',
          paddingVertical: 12,
          borderRadius: 23,
        }}>
           <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
           <Text style={{
              color: '#2A8D4A',
              alignSelf: 'center',
              fontSize: 15,
            }}
            >Login</Text>
            </TouchableOpacity>
            </View>
    </View>


  );}
}
export default Register;