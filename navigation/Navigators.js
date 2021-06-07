import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {MaterialCommunityIcons } from "@expo/vector-icons"

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

import ProfileScreen from '../screens/ProfileScreen';
import LeaderBoardScreen from '../screens/LeaderboardScreen';
import TasksScreen from '../screens/TasksScreen';
import RewardsScreen from '../screens/RewardsScreen';

const Stack=createStackNavigator();
const Tab=createBottomTabNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
         <Stack.Screen
           name="Login"
           component={LoginScreen}
         />
         <Stack.Screen
         name="Register"
         component={RegisterScreen}
         />
          <Stack.Screen
         name="App"
         component={SecondNavigator}
         options={{title: ' ', headerLeft:()=>null}}
         />
         </Stack.Navigator>
    )
}

const SecondNavigator=()=>{
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
  
              if (route.name === 'Profile') {
                iconName = 'account'
              } else if (route.name === 'Tasks') {
                //iconName = 'sprout'
                iconName='charity'
              }
              else if (route.name === 'Rewards') {
                iconName = 'seal-variant'
              }
              else if (route.name === 'Leaderboard') {
                iconName = 'trophy-award'
              }
  
              // You can return any component that you like here!
              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#BC4749',
            inactiveTintColor: '#8491A3',
          }}
        >
          <Tab.Screen
          name="Tasks"
          component={TasksScreen}
          />
           <Tab.Screen
          name="Leaderboard"
          component={LeaderBoardScreen}
          />
           <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          />
           <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          />
        </Tab.Navigator>
      )

}

export {MainStackNavigator}