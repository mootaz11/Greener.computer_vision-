import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Icon} from 'react-native-elements'

export default function Header({title,navigation})
{
    const openDrawer = ()=>{
       navigation.openDrawer(); 
    }
    return(
        <View style={styles.headerContainer}>
            <Icon name="menu" onPress={openDrawer}/>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    headerContainer:{  
        flex:1,
        flexDirection:"row",
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    headerText:{
        color:"black",
        fontSize:20,
        fontWeight:"bold",
        letterSpacing:1,

    }
});