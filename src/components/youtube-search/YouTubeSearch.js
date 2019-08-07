import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YOU_TUBE_API_KEY = 'AIzaSyAnV4-rYQWehdoEXQf0ODyhNPWCDi-UEEM';

class YouTubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.videoSearch('Punith');
  }

  onVideoSelected = (selectedVideo) => {
    this.setState({ selectedVideo });
  }

  videoSearch = (searchString) => {
    YTSearch({ key: YOU_TUBE_API_KEY, term: searchString }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onVideoSearch={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelected} videos={this.state.videos} />
      </div>
    );
  }
}

export default YouTubeSearch;