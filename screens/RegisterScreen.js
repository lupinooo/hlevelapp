import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {MaterialCommunityIcons} from '@expo/vector-icons';

class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={
      secureTextEntry: true,
      secure: true
    }
  }

  changePassword (){
    if (this.state.secureTextEntry==true){
    this.setState({secureTextEntry:false})}
    else {this.setState({secureTextEntry:true})}
    }

    changePassword2 (){
      if (this.state.secure==true){
      this.setState({secure:false})}
      else {this.setState({secure:true})}
      }

  render () {

  return (
    
    <SafeAreaView style={{backgroundColor:'#F7FFF6'}}>
    
    <ScrollView style={{backgroundColor:'#F7FFF6',height:'100%'}}>
  
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
            fontFamily:'Gill Sans'
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
                fontFamily:'Gill Sans'
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
                fontFamily:'Gill Sans'
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
                fontFamily:'Gill Sans'
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
                fontFamily:'Gill Sans'
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
             secureTextEntry={this.state.secure}
             style={{
              paddingLeft: 10,
              flex: 1,
              fontFamily:'Gill Sans'
             }}
            />
           
           <TouchableOpacity 
            onPress = {
              () => this.changePassword2()
            }
            >

                   <MaterialCommunityIcons
                    name = {this.state.secure==true ? "eye-outline" : "eye-off-outline"}
                    color="#46505D"
                     size={23} 
                   
                    style={{
                      opacity: 0.8,
                    }}/>

            </TouchableOpacity>

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
             secureTextEntry={this.state.secureTextEntry}
             style={{
              paddingLeft: 10,
              flex: 1,
              fontFamily:'Gill Sans'
             }}
            />
           
           <TouchableOpacity 
            onPress = {
              () => this.changePassword()
            }
            >

                   <MaterialCommunityIcons 
                    name={this.state.secureTextEntry==true ? 'eye-outline' : 'eye-off-outline'}
                    color="#46505D"
                     size={23} 
                   
                    style={{
                      opacity: 0.8,
                    }}/>

            </TouchableOpacity>

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
              fontFamily:'Gill Sans'
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
              fontFamily:'GillSans-Light'
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
              fontFamily:'Gill Sans'
            }}
            >Login</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>
    </SafeAreaView>

  );}
}
export default Register;