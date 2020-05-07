import React, { useState } from 'react';
import {View,Text,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import Card from '../common/Card';

import {Title} from 'react-native-paper';
import axios from 'axios';


export default function Weather ({navigation,route}){

const cities = [{name:'Monastir'},
  {name:'Tunis'},
  {name:'Sousse'},
  {name:'Sfax'},
  {name:'Bizerte'},
  {name:'Medenine'},
  {name:'Gafsa'},
  {name:'Gebili'},
  {name:'Tatawin'},
  {name:'Béja'},
  {name:'Seliana'},
  {name:'Mahdia'},
  {name:'Nabeul'},
  {name:'Kef'},
  {name:'Tozeur'},
  {name:'Gasserine'},
  {name:'Jendouba'},
  {name:'Manouba'},
  {name:'Ariana'},
  {name:'Ben arous'},
  {name:'sidi Bouzid'},
  {name:'Kairouan'},
  {name:'Gabes'},
  {name:'zaghouan'}
]

return (
  <View style={styles.container}>
  <Title style={styles.title}>Weather</Title>
<ScrollView>

<View style={styles.Cards}>
       {  
           cities.map((city,i)=>{
            console.log(city.name);   
            return(
                   <TouchableOpacity onPress={()=>{navigation.navigate('City',{cityName:city.name})}}  key={i} >
                       <Card {...city}  key={i}/>
                   </TouchableOpacity>
               
                   )
               
           })
       }
</View>

</ScrollView>
</View>



);

}

const styles = StyleSheet.create({
container: {
flex:1,
backgroundColor:"#78982B"

},
title:{
fontSize:36,
fontWeight:'bold',
marginTop:30,
marginLeft:20,
color:'white'

},

Cards:{
flex:1,
marginTop:35,
width:'100%',
height:'100%',
flexDirection:'column',
alignItems:'center',
}

})

