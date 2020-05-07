import React from 'react';
import { Button, View, Text, TextInput, StyleSheet ,Image,TouchableOpacity} from 'react-native';
import FlatButton from '../common/FlatButton';

export default function Welcome({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.TitleContainer}>
                <Text style={styles.make}>Make it</Text>
                <Text style={styles.greener}>Greener</Text>
            </View>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("../assets/Welcome.png")} />
            </View>
            <View style={styles.containerButtons}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")  }>
                    <FlatButton text="Login"  />
        </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate("Signup")  }>
          <FlatButton text="Sign up"  />
          </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.text}>terms of services</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    make:{
        fontWeight:'bold',
        fontSize:30,
        fontStyle:'italic',
        marginRight:10,

    },
    greener:{        
    fontWeight:'bold',
    fontSize:30,
    fontStyle:'italic',
    color:'#78982B'
},
    TitleContainer:{
        flexDirection:'row',
        paddingVertical:20,
        marginVertical:10
        
    },

    image:{
        width:100,
        height:100,
    },
    imageContainer:{
        padding:50,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'

    },
    containerButtons: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
    },
    text: {
        marginVertical: 10,
        color: 'gray'
    }
})
