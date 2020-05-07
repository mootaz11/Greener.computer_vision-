import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';
export default function FlatButton({text}){
    return(
        <View style={styles.button}>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
        );
}


const styles = StyleSheet.create({
button:{
    width:300,
    borderRadius:10,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:"#4ced77",
    shadowColor:'#fff',
    marginVertical:7,
    shadowOffset:{width:1,height:1},
    shadowColor:'#333',
    shadowOpacity:0.3
},
buttonText:{
color:'black',
fontWeight:'bold',
textTransform:'uppercase',
textAlign:'center',
fontSize:16,
letterSpacing:1,
textAlign:'center'
}
}
)