import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

export default function Card(props) 
{
    const imageNames = {
        apple:require("../assets/apple.png"),
        orange:require("../assets/orange.png"),
        olive:require("../assets/organic.png"),
        weather:require("../assets/hot.png")
        }

return(
<View style={styles.Card}>
<Title>{props.name}</Title>
<Image style={styles.image} source={imageNames[props.Imagename]}/>
</View>
);

}

const styles=  StyleSheet.create({
    Card:{
        width:300,
        height:70,
        marginVertical:35,
        backgroundColor:'white',
        borderRadius:10,
        shadowColor:'#fff',
        marginVertical:7,
        shadowOffset:{width:1,height:1},
        shadowColor:'#333',
        shadowOpacity:0.4,
        flexDirection:'row',
        padding:20
    },
    image:{
        position:"absolute",
        right:30,
        width:32,
        height:32,
    }
})