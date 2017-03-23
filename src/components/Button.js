import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Btn extends Component{
	render(){
		return(
        	<Content>
	            <Button block onPress={this.props.onPress}>
	                <Text>{this.props.children}</Text>
	            </Button>
        	</Content>
		);
	}
}