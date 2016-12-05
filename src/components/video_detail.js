import React from 'react'

const VideoDetail = ({video}) => {
	if(!video){
		return <div>Loading...</div>
	}
	const videoId = video.id.videoId;
	const url =`https://www.youtube.com/embed/${videoId}`;
	return (
		<div className="video-detail-wrapper">
			<div className="video-player-wrapper">
				<iframe className="iframe-video-player" src={url}> </iframe>
			</div>
			<div className="current-video-details">
				<div className="current-video-title">{video.snippet.title}</div>
				<div className="current-video-description">{video.snippet.description}</div>
			</div>
		</div>
		)

}
export default VideoDetail