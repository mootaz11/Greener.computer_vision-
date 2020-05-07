import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import FlatButton from '../common/FlatButton';
import Field from '../common/Field';
import { Title } from 'react-native-paper'
import { Formik } from 'formik';
import * as yup from 'yup';

const Fields = [
{ placeholder: 'current password',name:'current',type:'text',secureTextEntry:true }, 
{ placeholder: 'new password',name:'newpass1' ,type:'text',secureTextEntry:true},
{ placeholder: 'repeat new password',name:'newpass2' ,type:'text',secureTextEntry:true},
];

export default function updatePass({ navigation }) {
    const updatePassChema = yup.object({
        current:yup.string().required('current password is required .'),
        newpass1:yup.string().min(6,'password is weak').required(' new password is required .'),
        newpass2:yup.string().oneOf([yup.ref('newpass1')],'passwords not match')
 })


    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Title style={styles.title}>update password</Title>
            </View>
            <Formik
                initialValues={{ current: '', newpass1: '',newpass2:''}}
                validationSchema={updatePassChema}
                onSubmit={(values,actions) => {
                    console.log(values);
                    actions.resetForm();
                    navigation.navigate("Settings")
                }
            }
            >
                {
                    (props) =>
                     (
                         <React.Fragment>
                        <View style={styles.form}>
                            {Fields.map((value, i) => {
                                return (
                                    <Field
                                        placeholder={value.placeholder}
                                        onChange={props.setFieldValue}
                                        onTouch={props.setFieldTouched}
                                        name={value.name}
                                        value={props.values[value.name]}
                                        error={ props.touched[value.name]  && props.errors[value.name] }
                                        type={value.type}
                                        secureTextEntry={value.secureTextEntry}
                                        key={i} />
                                        )
                            })}
                        </View>
                         <View style={styles.LoginContainer}>
                            <TouchableOpacity onPress={props.handleSubmit}>
                                <FlatButton
                                    text="update password"
                                />
                            </TouchableOpacity> 
                        </View>
            </React.Fragment>
                )
            }
            </Formik>


        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        width: "100%",
        height: "100%"
    },
    Header: {
        margin: 20
        },
    title: {
        fontSize: 28,
        marginTop: 15,
        color:"#4a4a49"
    },
    form: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 50

    },

    LoginContainer: {
        marginTop: 35,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },


})


