import React from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {MaterialCommunityIcons} from '@expo/vector-icons';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      secureTextEntry: true
    }

  }

  changePassword (){
    if (this.state.secureTextEntry==true){
    this.setState({secureTextEntry:false})}
    else {this.setState({secureTextEntry:true})}
    }

  render () {

  return (
    
    <SafeAreaView>
    <ScrollView style={{backgroundColor:'#F7FFF6',height:'100%'}}>
  
    <View>
      <Image source ={require('../assets/logo-cerc.png')}
        style = {{
          width:85,
          height:85,
          alignSelf: 'center',
          marginTop: 70,
        }}
      />
    </View>
      
    {/*Welcome back!*/}
        <Text 
          style={{
            fontSize: 37,
            alignSelf: 'center',
            paddingTop: 50,
            color: '#2A8D4A',
          }}
        >Welcome Back!</Text>
        
        {/* Sign in to your account */}
        <Text
        style={{
          fontSize: 14,
          alignSelf: 'center',
          marginTop: 2,
          opacity: 0.8,
          color: '#46505D',
        }}
        >Sign in to your account</Text>

        
        <View style={{
          flexDirection:'row',
           alignItems: 'center',
          marginHorizontal: 50,
          borderWidth: 1,
          marginTop: 50,
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
          marginTop: 22,
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
             secureTextEntry={this.state.secureTextEntry}
             style={{
             paddingLeft: 10,
             flex: 1
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
        
  {/* Login Button */}
        <View style={{
          marginHorizontal: 50,
          alignItems: 'center',
          justifyContent:'center',
          marginTop: 45,
          backgroundColor: '#2A8D4A',
          paddingVertical: 12,
          borderRadius: 23,
        }}><TouchableOpacity onPress={()=>this.props.navigation.navigate('App')}>
            <Text style={{
              color: '#F7FFF6',
              alignSelf: 'center',
              fontSize: 17,
            }}
            >Login</Text></TouchableOpacity>
        </View>
        

            {/* Not registered yet? */}
            <View>
              <Text style={{
              color: '#46505D',
              alignSelf: 'center',
              marginTop: 15,
              fontSize: 13,
              marginTop: 95,
              opacity: 0.8,
              }}
              >Not registered yet?</Text>
            </View>

            {/* Create an Account  */}
            <View style={{
          marginHorizontal: 50,
          alignItems: 'center',
          justifyContent:'center',
          marginTop: 8,
          backgroundColor: '#A1E3B6',
          paddingVertical: 12,
          borderRadius: 23,
        }}>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register')}>

           <Text style={{
              color: '#2A8D4A',
              alignSelf: 'center',
              fontSize: 15,
            }}
            >Create an account</Text>
            </TouchableOpacity>
            </View>
    </ScrollView>

    </SafeAreaView>

  );}
}
export default Login;