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
  View
   //tambahan
} from 'react-native';
 

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
