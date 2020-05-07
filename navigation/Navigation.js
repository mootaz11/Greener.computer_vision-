import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Services from '../screens/Services';
import profile from '../screens/profile';
import Action from '../screens/Action';
import Settings from '../screens/Settings';
import Result from '../screens/Result';
import About from '../screens/About';
import Weather from '../screens/weather';
import City from '../screens/city';
import Header from '../common/Header';
import updatePass from '../screens/updatePass';




const appBottomTabs = createBottomTabNavigator();
const ServicesStack = createStackNavigator();
const settingsStack = createStackNavigator();
const aboutStack = createStackNavigator();



export const AboutStack=()=>(
<aboutStack.Navigator>
  <aboutStack.Screen name="About"   options={({navigation})=>{
         return {
          headerTitle : ()=> (<Header  navigation={navigation} title=" About"/>)
         }
       }
         
       }  component={About}/>
</aboutStack.Navigator>)

export const settingsStackScreen = () => (
    <settingsStack.Navigator>
       <settingsStack.Screen name="Settings"   options={({navigation})=>{
         return {
          headerTitle : ()=> (<Header  navigation={navigation} title=" Settings"/>)
         }
       }
         
       }  component={Settings} />
    
    <settingsStack.Screen name="UpdatePass"   options={({navigation})=>{
         return {
          headerTitle : ()=> (<Header  navigation={navigation} title="Settings"/>)
         }
       }
         
       }  component={updatePass} />

    </settingsStack.Navigator> 
  )
 
  

const ServicesStackScreen = () => (
    <ServicesStack.Navigator>
      <ServicesStack.Screen  options={({navigation})=>{
         return {
          headerTitle : ()=> (<Header  navigation={navigation} title=" Services"/>)
         }
       }
         
       } name="Services" component={Services} />
      <ServicesStack.Screen name="Action" component={Action} />
      <ServicesStack.Screen name="Weather" component={Weather}/>
      <ServicesStack.Screen name="Result" component={Result}/>
      <ServicesStack.Screen name="City" component={City}/>
    </ServicesStack.Navigator>
  )
  export  const appBottomTabsScreen=()=>(
    <appBottomTabs.Navigator initialRouteName="Services">
    <appBottomTabs.Screen name="Services"   component={ServicesStackScreen} />
    <appBottomTabs.Screen name="profile" component={profile} />
  </appBottomTabs.Navigator>
)
  