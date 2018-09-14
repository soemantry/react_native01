/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
   //tambahan
} from 'react-native';
 import Judul from './components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reloadr,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
          <View>
<<<<<<< HEAD
          <Judul BIODATA="BIODATA"/>
          <Judul BIODATA="LOGIN"/>
          <Judul BIODATA="KELAS"/>
=======
          <Judul> </Judul>
>>>>>>> 4b5010b38808d4f90b14b68b060227bf1c19f7de

		    <Text style={styles.welcome}>
      	   Diptya Bagus Sumantry!
		   </Text>

		   <Text style={styles.welcome}>
      	   XI RPL 2!
		   </Text>
           
           
		   <Text style={styles.welcome}>
      	  absen 14!
		   </Text>

        <Text style={styles.instructions}>
 		  Tararam14
        </Text> 

    
        <Image source={require('./ok.jpg')} style={{width: 350,height: 250}} />


      </View>
	  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
