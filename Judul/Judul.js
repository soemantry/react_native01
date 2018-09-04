import React from 'react'; //tulisan react bisa bebas
import {Text} from 'react-native';

import Judul from 'C:\Users\diptya sumantry\tararam13\Judul'

class Judul extends  component {
	render(){
		return  (
			<view>
			<Judul/>
			<Text style={salon.Judul}> BIODATA </Text>
			</view>
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
export default Judul;