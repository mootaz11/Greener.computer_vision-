import React from 'react';
import {Text,View,TextInput,StyleSheet} from 'react-native';

export default function Field(props){
    const error = props.error;
    const handleChange =(value)=>{
        props.onChange(props.name,value)
    }

    const handleTouch=()=>{
        props.onTouch(props.name)
    }

    return (
            <View style={styles.inputContainer}>
            <TextInput  
            onBlur={handleTouch} 
            onChangeText={handleChange} 
            style={styles.input} 
            placeholder={props.placeholder}
            secureTextEntry={props.secureTextEntry}            
            />
            {error && <Text style={styles.error}>{error}</Text>}
            
            </View>
    );
}

const styles = StyleSheet.create({
    error:{
        marginTop:12,
        color:'red'
    },
inputContainer:{
    marginVertical:18,
    width:250,
    height:40,
    borderBottomWidth:0.5,
    borderBottomColor:'grey',
    paddingVertical:10,
        
},
input:{
    height:20,
    alignSelf:'stretch',
}

});

