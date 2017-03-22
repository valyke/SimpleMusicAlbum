import React from 'react';
import { registerComponent, AppRegistry, View } from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';
const App = () => {
  return(
  	<View style={{ flex: 1 }}>
    	<Header text="Albums" />
    	<AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('test1', () => App);