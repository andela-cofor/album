// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, View, Image } from 'react-native';

// component
import AlbumCard from './AlbumCard';
import AlbumCardSection from './AlbumCardSection';
import Button from '../button/Button';

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <AlbumCard>
      <AlbumCardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </AlbumCardSection>
      <AlbumCardSection>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />
      </AlbumCardSection>
      <AlbumCardSection>
        <Button/>
      </AlbumCardSection>
    </AlbumCard>
  );
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
})

export default AlbumDetail;
