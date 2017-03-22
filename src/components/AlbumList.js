import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

import axios from 'axios';
import AlbumRow from './AlbumRow';

class AlbumList extends Component {

	constructor(props) {
		super(props);
		this.state = { albums: [] };	
	}

	componentWillMount() {
		axios.get('http://rallycoding.herokuapp.com/api/music_albums')
		.then((response) => this.setState({
			albums: response.data
		}))
		.catch(err => console.warn("Error fetching: ",err))
	}

	renderAlbums(){
		return this.state.albums.map(a => 
			<AlbumRow key={a.title} album={a} />
		);
	}

	render() {	
		//console.warn(albums);

		
		return(
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}

}

export default AlbumList;