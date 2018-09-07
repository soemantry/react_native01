import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class Judul extends Component {
	render(){
		return  (
			<View>
			
			<Text style={salon.Judul}> BIODATA </Text>

			</View>
			)
	}
}
const salon = {
	Judul: {
		Color: '#f00',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: '#0f0'
		

	}
}
