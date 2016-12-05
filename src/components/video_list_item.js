import React, {Component} from 'react'

 const VideoListItem = ({video, onVideoSelect}) => {
	return (<li className="video-list-item" onClick={() => onVideoSelect(video)}>
			<div className="video-info">
				<div className="video-thumbnail">
					<img alt={video.snippet.title} title={video.snippet.title} src={video.snippet.thumbnails.default.url}/>
				</div>
				<div className="video-description">
					<div>
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>)
 }
	

export default VideoListItem