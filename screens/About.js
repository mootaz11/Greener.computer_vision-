import React from 'react';
import { View, Text, StyleSheet, ScrollView ,Image} from 'react-native';
import { Title } from 'react-native-paper';

export default function About() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title style={styles.Title}>About us </Title>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.aboutText}>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                         </Text>
                    </View>
                    <View>
                        <Title style={styles.Title}>Our Team</Title>

                    </View>
                    <Image style={styles.profilePicture} source={require("../assets/achraf.jpg")} />
                    <Text style={styles.teamMember}>Achraf Chaieb</Text>

                    <Image style={styles.profilePicture} source={require("../assets/med.jpg")} />
                    <Text style={styles.teamMember}>Med Hedi Lajili</Text>

                    <Image style={styles.profilePicture} source={require("../assets/mootaz.jpg")} />
                    <Text style={styles.teamMember}>Amara Mootaz Belleh</Text>

                </View>


            </ScrollView >

        </View >
    )
}

const styles = StyleSheet.create({
    teamMember:{
        fontSize:20, 
        letterSpacing: 1,
        fontWeight: '100',
        textAlign: 'center',
        marginVertical: 10
    },
    profilePicture: {
        marginVertical:10,
        width: 100,
        height: 100,
        borderRadius: 200
    },
    text: {
        letterSpacing: 2,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    header: {
        marginTop: 15,
        marginLeft: 10,
        width: '100%',
        height: 70,
    },
    Title: {
        fontSize: 30,
        letterSpacing: 1,
        fontWeight: '100',
        textAlign: 'center',
        marginVertical: 10,
        color:'#4ced77'
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",


    },
    aboutText: {
        marginHorizontal: 9,
        width:"80%",
        borderBottomColor:'grey',
        marginBottom:15,
        borderBottomWidth:1,
        paddingVertical:5
    }
})
