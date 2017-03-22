import React from 'react';
import { registerComponent, AppRegistry, View } from 'react-native';

import AlbumList from './src/components/AlbumList';
import Header from './src/components/Header';
const App = () => {
  return(
  	<View>
    	<Header text="Albums" />
    	<AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('test1', () => App);