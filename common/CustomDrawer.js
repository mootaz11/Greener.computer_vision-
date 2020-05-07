import React from 'react';
import {View,StyleSheet,Image} from 'react-native';
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer';
import  {Avatar,Title,Caption,Text,TouchableRipple,Switch,Drawer,Paragraph} from 'react-native-paper';
import {Icon} from 'react-native-elements'
export default function CustomDrawer (props){
    return(
 <View  style={{flex:1}}>
     <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
            <View style={styles.logoAppSection}>
                <View>
                    <Title style={styles.title}>Greener</Title>
                    
                </View>
            </View>
        </View>

        <Drawer.Section style={styles.drawerSection} >
             <DrawerItem icon={({color,size})=>(
                  <Icon 
                    name="home"
                    color={color}
                    size={size} 
                />
                )} 
                label="Home"
                onPress={()=>{props.navigation.navigate("Services")}}
                />

        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} >
             <DrawerItem icon={({color,size})=>(
                  <Icon 
                    name="account-circle"
                    color={color}
                    size={size} 
                />
                )} 
                label="About"
                onPress={()=>{props.navigation.navigate("About")}}
                />

        </Drawer.Section>
        <Drawer.Section style={styles.drawerSection} >
             <DrawerItem icon={({color,size})=>(
                  <Icon 
                    name="settings"
                    color={color}
                    size={size} 
                />
                )} 
                label="Settings"
                onPress={()=>{props.navigation.navigate("settings")}}/>
        </Drawer.Section>
    </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection} >
             <DrawerItem icon={({color,size})=>(
                  <Icon 
                    name="exit-to-app"
                    color={color}
                    size={size} 
                />
                )} 
                label="Logout"
                onPress={()=>{}}
                />

        </Drawer.Section>
 </View>
 );
}
const styles= StyleSheet.create({

drawerContent:{
    flex:1,
},
logoAppSection:{
    paddingLeft:20,

},
title:{
    fontSize:30,
    marginTop:30,
    fontWeight:'bold'
},
caption:{
    fontSize:14,
    lineHeight:14,
},
row:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
},
section:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:15,
},
paragraph:{
    fontWeight:'bold',
    marginRight:3
},
drawerSection:{
    marginTop:15,
},
bottomDrawerSection:{
marginBottom:15,
borderTopColor:'#f4f4f4',
borderTopWidth:1
},
preference:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:12,
    paddingHorizontal:16,
}




});