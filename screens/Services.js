import React  from 'react';
import { View ,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Title} from 'react-native-paper';
import Card from '../common/Card';


const services = [
                 {name:'Apple Service',Imagename:"apple"},
                  {name:'Orange Service',Imagename:"orange"},
                  {name:'Olive Service',Imagename:"olive"},
                ]
export  default function Services ({navigation})

{
       return (
           <View style={styles.container}>
               <Title style={styles.title}>Our Services</Title>
      
            <View style={styles.Cards}>
                    {
                        services.map((service,i)=>{
                            return(
                                <TouchableOpacity onPress={()=>{navigation.navigate('Action',{ServiceName:service.name})}}  key={i} >
                                    <Card {...service}  key={i}/>
                                </TouchableOpacity>
                            
                                )
                            
                        })
                    }
                    <TouchableOpacity onPress={()=>{navigation.navigate('Weather',{ServiceName:'Weather Service'})}}>
                        <Card  name="Weather Service" Imagename="weather"/>
                    </TouchableOpacity>
            </View>

           </View>
      
      
      
      );
       
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#78982B"

    },
    title:{
        fontSize:36,
        fontWeight:'bold',
        marginTop:30,
        marginLeft:20,
        color:'white'
    },

    Cards:{
        flex:1,
        marginTop:35,
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    }

    })
    
