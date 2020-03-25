import React, { useState, useEffect } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Button, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import TrainStops from '../assets/data/trainStops';

export default function SingleTrain({
	navigation,
	route,
}) {
	const [title, setTitle] = useState('LasdasdasdasdasdasdasdasdasdN')

	SingleTrain.navigationOptions = () => ({
		title
	});
	useEffect(() => {
		navigation.setParams({ title });
	}, []);
	const currentTrain = route.params?.train;
	return (
		<ScrollView>
			{Object.entries(TrainStops[currentTrain]).map(([key, value]) => (
				<ListItem
					onPress={() => navigation.navigate('SingleStation', { station: value })}
					key={key}
					leftAvatar={{ source: require('../assets/images/A.png') }}
					title={value}
					bottomDivider
					chevron
				/>
			))}
		</ScrollView>
	);
}


