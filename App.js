// react libraries
import React from 'react';
import { View } from 'react-native';

// components
import Header from './src/components/header/Header';
import AlbumList from './src/components/album/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText='Albums!' />
        <AlbumList />
      </View>
    );
  }
}
