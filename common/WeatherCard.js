import React from 'react';
import {View,Text,Image,StyleSheet,ImageBackground} from 'react-native';



export default function WeatherCard (props){
return(
<View>
    <View style={styles.header}>
        <ImageBackground source={image} style={styles.image}>
         </ImageBackground>
    </View>




</View>
);
}

const styles = StyleSheet.create({

    header:{
    width:"100%",
    height:80,
    backgroundColor:"red",
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},

image:{
    width:'100%',
    height:'100%',
    flex:1}


})