// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View } from 'react-native';

const AlbumCardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    position: 'relative',
  },
});

export default AlbumCardSection;
