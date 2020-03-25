import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

export default function SingleStation({
	navigation,
	route,
}) {
	const [data, setData] = useState([]);
	const [uptown, setUpTown] = useState([]);
	const [downtown, setDownTown] = useState([]);


	useEffect(() => {
		getTrainTimes();
	}, []);

	getTrainTimes = async () => {
		let { data } = await axios.get(`http://node-express-env.hfrpwhjwwy.us-east-2.elasticbeanstalk.com/trains/Times%20Sq%20-%2042%20St`);
		console.log(data)
		setData(data);
	}
	
	return (
		<ScrollView>
			<Text>yoas</Text>
		</ScrollView>
	);
}


