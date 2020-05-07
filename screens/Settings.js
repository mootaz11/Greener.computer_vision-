import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Title } from 'react-native-paper';
import { Icon } from 'react-native-elements';



export default function Settings({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={styles.Title}>Settings</Title>
            </View>
            <View style={styles.body}>
                <View style={styles.emailField}>
                    <View style={styles.textField}>
                        <Text style={styles.text}>
                            update password
                            </Text>
                    </View>
                        <View style={styles.settings}>
                        <TouchableOpacity onPress={() => { navigation.navigate("UpdatePass") }}>
                            <Icon name="arrow-forward" color="grey" />
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1
    },
    Title: {
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 10,

    },

    body: {
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        position: 'absolute',
        top: 100

    },
    emailField: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 4,
        shadowColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        flexDirection: "row",
        alignItems: "center"
    },
    textField: {
        marginLeft: 5
    },
    text: {
        textAlign: "left",
        color: "grey"
    },
    settings: {
        position: "absolute",
        right: 20
    },
    inputContainer: {
        marginVertical: 18,
        width: 250,
        height: 40,
        paddingVertical: 10,

    },
    input: {
        height: 20,
        alignSelf: 'stretch',
    },

})