import React, { Component } from 'react';
import { Text, View, Image, Alert, ToastAndroid, Linking } from 'react-native';
import { Container } from 'native-base';

import Btn from './Button';
import Card from './Card';
import CardSection from './CardSection';
const AlbumRow = ({album}) => {

	const { 
		title, 
		artist, 
		thumbnail_image,
		image,
		url
	} = album;

	const { 
		imageStyle, 
		textStyle, 
		imageContainerStyle, 
		albumTextStyle,
		coverStyle
	} = styles;

	return(
		<Card>
			<CardSection>
				<View style={imageContainerStyle}>
					<Image
					style={imageStyle}
					source={{ uri: thumbnail_image }}
					/>
				</View>
				<View style={textStyle}>
					<Text style={albumTextStyle}>{title}</Text>
					<Text>{artist}</Text>
				</View>
			</CardSection>
			<CardSection>
				<View>
					<Image style={coverStyle} source={{ uri: image }} />
				</View>
			</CardSection>
			<CardSection>
				<Btn onPress={() => 
					Alert.alert(`Buy ${title} now?`,`You will be redirected to amazon to purchase album "${title}"`, [
						{ text: 'Cancel', onPress: () => ToastAndroid.show('Purchase cancelled.', ToastAndroid.SHORT)},
						{ text: 'Proceed', onPress: () => Linking.openURL(url) }
					])
				 }>
				 BuUY NOW
				 </Btn>
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
	},
	imageContainerStyle: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	albumTextStyle: {
		fontWeight: 'bold',
		fontSize: 17
	},
	coverStyle: {
		height: 300,
		width: 300
	}
};


export default AlbumRow;