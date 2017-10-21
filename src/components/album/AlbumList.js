// react libraries
import React from 'react';

// react-native libraries
import { ScrollView } from 'react-native';

// third-parties libraries
import axios from 'axios';

// component
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }

  /**
   * ComponentWillMount
   *
   * @returns {void}
   */
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((response) => {
        this.setState({
          albums: response.data
        });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album) => <AlbumDetail album={album} key={album.title} />);
  }

  /**
   * @return {XML}
   */
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
