import React from "react";

const videoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const videoTitle = video.snippet.title;

  return (
    <div>
      <li className="list-group-item" onClick={() => onVideoSelect(video)}>
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src={imageUrl} />
          </div>
          <div className="video-body">
            <div className="video-heading">{videoTitle}</div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default videoListItem;
