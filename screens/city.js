import React, { useState,useEffect}from 'react';
import {View,Text,ImageBackground,StyleSheet,ScrollView,Image} from 'react-native';
import axios from 'axios';
const daysOfWeeks = {0:'Sunday',1:'Monday',2:'Tuesday',3:'Wednesday',4:'Thursday',5:'Friday',6:'Saturday'}
const image = { uri: "../assets/headerBackground.jpg" };
const api_key = "14f143b966ef4592d17851892ada8b47";
const mainImages=
    {
        Clear:require("../assets/summertime.png"),
        Rain:require("../assets/rain.png"),
        Clouds:require("../assets/clouds.png")
    }
const SmallImages={
    Clear:require("../assets/sunSmall.png"),
    Rain:require("../assets/rainSmall.png"),
    Clouds:require("../assets/cloudSmall.png")}
    export default function City({navigation,route})
{   const [weathers,setweather] = useState([]);
    const [todayWeather,setTodayWeather]=useState({})
    const data =[];
     useEffect(()=>{
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${route.params.cityName},tn&APPID=${api_key}&layer=temperature&units=metric`)
             .then(weather=>{
                weather.data.list.forEach(element => {
                var dayOfWeek ="";
                if(new Date(element.dt_txt.split(' ')[0]) === new Date().getDate())
                {
                    dayOfWeek="Today";
                }
                else 
                {
                    dayOfWeek=daysOfWeeks[new Date(element.dt_txt.split(' ')[0]).getDay()]
                }
                data.push({main:element.weather[0].main,temperature:element.main.temp.toString().split('.')[0],time:element.dt_txt.split(' ')[1].split(':')[0]
                +':'+element.dt_txt.split(' ')[1].split(':')[1]
                ,day: dayOfWeek})
                })
                for (let i=1; i<data.length-1;i++)
                {
                    if(data[i].day.toString() != data[i+1].day.toString())
                        {
                        setweather(weathers=>[...weathers ,data[i+3]]);        
                        }
                }
                setTodayWeather(data[0])    
            })  
         .catch(err=>{console.error(err)})
        
        
        
        },[])
return(
<View style={styles.container}>
       <View style={styles.headerContainer}>
          <ImageBackground source={require("../assets/headerBackground.jpg")} style={styles.image}>
            <Text style={styles.cityName}>{route.params.cityName},Tn</Text>
            <Text style={styles.time}>Today,{todayWeather.time}</Text>
            <Text style={styles.temperature}>{todayWeather.temperature}°</Text>
            <Image style={styles.WeatherImage} source={mainImages[todayWeather.main]}/>
             </ImageBackground>
       </View>
       <View style={styles.body}>
           {


        weathers.map((weather,i)=>{
        return(
            <View style={styles.dayWeather} key={i}>
            <Text>{weather.day}</Text>
            <Image style={styles.smallImage} source={SmallImages[weather.main]}/>
            <View style={styles.temp}>
                <Text style={styles.tempText}>{weather.temperature}°</Text>
            </View>
            </View>   
            );
            })
           }
           
       </View>
</View>
);
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection:'column',
    alignItems:'center'

},
headerContainer:{
width:'100%',
height:120,
flex:1
},

image:{
    flex:1,
    width:"100%",
    height:120,
    padding:4,
    flexDirection:'column'

},

body:{
    flex:1,
    width:'100%'
},
dayWeather:{
    flex:1,
    width:"100%",
    height:5,
    backgroundColor:'white',
    borderBottomColor:'grey',
    borderBottomWidth:0.5,
    flexDirection:'row',
    alignItems:'center'
    },
dayOfWeek:{
    fontSize:14,
    fontWeight:"bold",
    textAlign:'left'

},
cityName:{
    fontWeight:'bold',
    fontSize:34,
    color:'white'
},
WeatherImage:{
    width:50,
    height:50,
    position:'absolute',
    left:128,
    top:165
},
temperature:{
    fontSize:65,
    fontWeight:'bold',
    textAlign:'center',
    color:'white',
    
},
time:{
    fontSize:25,
    fontWeight:'bold',
    color:'white',
},
smallImage:{
    width:30,
    height:30,
    position:'absolute',
    right:10,
    alignContent:'center'
},
temp:{
    position:'absolute',
    right:48,
    alignContent:'center'

},
tempText:{
    fontSize:20,
}
})