import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    TextInput,
    Button
} from 'react-native';
import Events from './Events'
import Massages from './Massages'
import Login from './Login'
import {
    createBottomTabNavigator,
    createAppContainer,
    createDrawerNavigator,
    createStackNavigator
} 
from 'react-navigation'
import Styles from '../Styles/Styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export default function Main() {

    return (
       <Appcontainer />
    )


}



const HomeNavigator = createBottomTabNavigator({
   // Home,
    Massages,
    Events
},{
    navigationOptions:({navigation})=>{
       
        const {routName} =  navigation.state.routes[navigation.state.index];
        return {
            headerTitle:routName
        }
    }
})

const StackNavgitor = createStackNavigator({
   // HomeNavigator:HomeNavigator,
      Massages:{
        screen:Massages,
         navigationOptions: {
            header: null,
        },
      },
    Login:{
        screen:Login,
         navigationOptions: {
            header: null,
        },
    },
 
    Events,
    


},
//{
  //  defaultNavigationOptions:({navigation})=>{
//return{


  //  headerRight:(
     //   <FontAwesome name='bars' onPress={()=>navigation.openDrawer()} />
    //)

//},
{
    navigationOptions: {
        header: null,
    }

    
}
)
/*
const DrowerNav =createDrawerNavigator({
Home:{
    screen:StackNavgitor

},
News: { screen: News },
Events: { screen: Events },
},{
    drawerPosition: 'right',
}

)*/


const Appcontainer =createAppContainer(StackNavgitor);