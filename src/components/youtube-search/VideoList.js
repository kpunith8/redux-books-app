
import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoListItems = videos.map(video => {
    return <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />;
  })
  return (
    <div>
      <ul className="col-md-4 list-group">
        {videoListItems}
      </ul>
    </div>
  );
}

export default VideoList;
