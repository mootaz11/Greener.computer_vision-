import React from 'react';
import { View ,Text,StyleSheet,Image} from 'react-native';



export  default function Splash ({navigation})

{
    
       return (
           <View style={styles.view}>
            <Image style={styles.image} source={require("../assets/Welcome.png")} />
            </View>
       )
       
    
}

const styles = StyleSheet.create({
    view:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        width:100,
        height:100,
    }
})

