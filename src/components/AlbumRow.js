import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Container } from 'native-base';

import Card from './Card';
import CardSection from './CardSection';
const AlbumRow = ({album}) => {

	const { title, artist, thumbnail_image } = album;
	const { imageStyle, textStyle } = styles;

	return(
		<Card>
			<CardSection>
				<View>
					<Image
					style={imageStyle}
					source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={textStyle}>
					<Text>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
		</Card>
	);
};

const styles = {
	imageStyle:{
		height: 50,
		width: 50
	},
	textStyle:{
		justifyContent: 'space-between',
		flexDirection: 'column'
	}
};


export default AlbumRow;