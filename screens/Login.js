import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AuthContext } from '../navigation/context';
import FlatButton from '../common/FlatButton';
import Field from '../common/Field';
import { Title } from 'react-native-paper'
import { Formik } from 'formik';
import * as yup from 'yup';


const Fields = [
{ placeholder: 'email',name:'email',type:'text',secureTextEntry:false }, 
{ placeholder: 'password',name:'password' ,type:'password',secureTextEntry:true},
];

export default function Login({ navigation }) {
    const { signIn } = React.useContext(AuthContext);
    const LoginSchema = yup.object({
        email:yup.string().email('email is invalid .').required('email is required .'),
        password:yup.string().min(6,'password is weak').required('password is required .'),
    })



    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Title style={styles.title}>Login</Title>
            </View>
            <Formik
                initialValues={{ email: '', password: ''}}
                validationSchema={LoginSchema}
                onSubmit={(values,actions) => {
                    console.log(values);
                    actions.resetForm();
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
                                    text="Login"
                                />
                            </TouchableOpacity>
                            <Text style={styles.forgotpass}>forgot your password ? </Text>
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
        fontSize: 35,
        marginTop: 15
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
    forgotpass:{
        flex:1,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        textDecorationLine:'underline',
        color:'grey'
    
    
    }


})


