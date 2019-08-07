import React, { Component } from 'react';
import searchYoutube  from 'youtube-api-v3-search';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const YOU_TUBE_API_KEY = 'AIzaSyCZQ5fS7QfFmXkwmq0BJEY4L92JYZ4X7jE';

class YouTubeSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
  }

  componentDidMount() {
    this.videoSearch('React Proramming');
  }

  onVideoSelected = (selectedVideo) => {
    this.setState({ selectedVideo });
  }
  
  videoSearch = (searchString) => {
     searchYoutube(YOU_TUBE_API_KEY, {q: searchString, type: 'video'})
     .then(data => { this.setState({videos: data.items, selectedVideo: data.items[0]})})
     .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container">
        <SearchBar onVideoSearch={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelected} videos={this.state.videos} />
      </div>
    );
  }
}

export default YouTubeSearch;