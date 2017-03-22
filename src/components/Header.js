import React from 'react';
import { View, Text, AppRegistry } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;

	return (
		<View style={viewStyle}>
			<Text style={textStyle} >{props.text}</Text>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 30
	},
	viewStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#95a5a6',
		height: 60,
		paddingTop: 1
	}
};


export default Header;