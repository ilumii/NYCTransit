import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import Images from '../assets/images';

export default function AllTrains({
	navigation
}) {
	const trains = ["1", "2", "3", "4", "5", "6", "7", "A", "B", "C", "D", "E", "F", "G", "H", "J", "M", "N", "Q", "R", "S", "W", "Z"]
	return (
		<ScrollView>
			{trains.map((train, i) => (
				<ListItem
					onPress={() => navigation.navigate('SingleTrain', { train, title: train })}
					key={i}
					leftAvatar={{ source: Images[train] }}
					bottomDivider
					chevron
				/>
			))}
		</ScrollView>
	);
}