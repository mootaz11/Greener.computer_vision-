import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,TextInput} from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import axios from "axios";
import { Icon } from 'react-native-elements';

export default function profile({ navigation }) {
    const [user, Setuser] = useState({email:"amaramootaz11@gmail.com",username:"Amara Mootaz"});
    const [inputVisible,setInputVisible] = useState(false);
    const [inputUserName,setUsernameVisible] = useState(false);
    React.useEffect(() => {

    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={styles.name}>Amara Mootaz</Title>
                <Image style={styles.profilePicture} source={require("../assets/avatar.png")} />
            </View>
            <View style={styles.body}>
                <View style={styles.emailField}>
                    <View style={styles.textField}>
                        {inputVisible  ? 
                            <View style={styles.inputContainer}>
                            <TextInput style={styles.input} 
                            onChange={()=>{Setuser({email:event.target.value,username:user.username})}} 
                            value={user.email}
                            >
                             </TextInput>
                            
                            </View>
                           :

                            <Text style={styles.text}>
                                    {user.email}
                            </Text> 
                        }
                    </View>

                    <View style={styles.settings}>
                        <TouchableOpacity onPress={() => {
                            if(inputVisible){
                                console.log(user);       
                                setInputVisible(false);
                            }
                            else {
                                console.log(user);       
                                setInputVisible(true);
                            }
                            
                            
                            }}>
                            
                            {
                                inputVisible ? 
                                <Icon name="done" color="green" />   
                                :   
                                <Icon name="settings" color="grey" />   

                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.emailField}>
                    <View style={styles.textField}>
                        {inputUserName  ? 
                            <View style={styles.inputContainer}>
                            <TextInput style={styles.input} 
                                onChange={()=>{Setuser({username:event.target.value,email:user.email})}} 
                                value={user.username}
                            
                            ></TextInput>
                            </View>
                           :

                            <Text style={styles.text}>
                                {user.username}
                            </Text> 
                        }
                    </View>

                    <View style={styles.settings}>
                        <TouchableOpacity onPress={() => {
                            if(inputUserName){
                                
                                setUsernameVisible(false);
                            }
                            else {

                                                            
                                setUsernameVisible(true);
                            }
                            
                            
                            }}>
                            
                            {
                                inputUserName ? 
                                <Icon name="done" color="green" />   
                                :   
                                <Icon name="settings" color="grey" />   

                            }
                        </TouchableOpacity>
                    </View>
                </View>

                </View>


        </View>
    )


}

const styles = StyleSheet.create({
    inputContainer:{
        marginVertical:18,
        width:250,
        height:40,
        paddingVertical:10,
            
    },
    input:{
        height:20,
        alignSelf:'stretch',
    },    
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#78982B",
        width: "98%",
        height: 180,
        borderRadius: 5,
        marginTop: 8,
        justifyContent: "center",
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    profilePicture: {
        width: 80,
        height: 80,
        position: "absolute",
        top: 130,
        borderRadius: 200
    },

    name: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 35,
    },


    body: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"

    },


    emailField:

    {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 4,
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        flexDirection: "row",
        alignItems: "center",
        marginBottom:5
    },
    textField:{
        marginLeft:10
    },
    text:{
        textAlign: "left",
        color:"grey"
    },
    settings: {
        position: "absolute",
        right: 20
    }

});
