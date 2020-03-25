import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';

export default function AllTrains({
	navigation
}) {
	const trains = ["1", "2", "3", "4", "5", "6", "7", "A", "B", "C", "D", "E", "F", "G", "H", "J", "M", "N", "Q", "R", "S", "W", "Z"]
	return (
		<ScrollView>
			{trains.map((l, i) => (
				<ListItem
					onPress={() => navigation.navigate('SingleTrain', { train: l, title: l })}
					key={i}
					leftAvatar={{ source: require('../assets/images/A.png') }}
					title={l}
					bottomDivider
					chevron
				/>
			))}
		</ScrollView>
	);
}