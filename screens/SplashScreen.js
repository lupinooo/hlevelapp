import React, {Component} from 'react';
import { Text, View, Image, Animated } from 'react-native';


 class SplashScreen extends React.Component
{
  
  constructor(props)
  {
    super(props);
   
    setTimeout(()=>
    {
      this.props.navigation.navigate("Login");
    },3000);
  }


  
  render()
  {

      return(

        <View 
        style={{backgroundColor: 'rgba(161,227,182, 0.4)',height:'100%',width:'100%',alignContent:'center'}}
        >
          <View>
          <Animated.Image
          source ={require('../assets/logo-cerc.png')}
          style = {{
            width:300,
            height:300,
            alignSelf: 'center',
            marginTop: 225,         
          }}
          />
          </View>

        </View>

      );

  }

}
export default SplashScreen;

