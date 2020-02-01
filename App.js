import React from 'react';
import { StyleSheet, Text, View,AppState } from 'react-native';
import Main from './Screens/Main';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
var {updatelocation} = require('./Helper/API')


const LOCATION_TASK_NAME = 'background-location-task';


export default class App  extends React.Component{
  state = {
    location: null,
    errorMessage: null,
     isLocationModalVisible: false,
    appState: AppState.currentState
  };
   componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }
  handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      this._getLocationAsync();
    }
    this.setState({ appState: nextAppState });
  };

  async UNSAFE_componentWillMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
   
     // await Location.Accuracy.Highest;
    
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Highest,
      });
     
    }
  
 

      _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    try{

    let location = await Location.getCurrentPositionAsync({});
     console.log(location);
    }
    catch(error){
      console.log(error);

    }
   
   // this.setState({ location });
};

  
    render(){
  return (
   <Main />
  )
    }
}
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    // do something with the locations captured in the background
   // console.log("fuck this shit "+ JSON.stringify(locations));
    updatelocation(locations);


  }
});