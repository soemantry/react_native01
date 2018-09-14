<<<<<<< HEAD
import React, { Component } from 'react';
import {Text,View} from 'react-native';

export default class Judul extends Component {
	render(){
		return  (
			<View>
			
			<Text style={salon.Judul}> {this.props.BIODATA} </Text>

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
=======
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
>>>>>>> 4b5010b38808d4f90b14b68b060227bf1c19f7de
