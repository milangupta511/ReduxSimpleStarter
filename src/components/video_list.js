import React , {Component} from 'react'
import VideoListItem from './video_list_item'

const VideoList = ({videos, onVideoSelect}) => {
	const generateVideoListItems = videos.map((video) => {
			return <VideoListItem 
			onVideoSelect={onVideoSelect}
			key={video.etag}
			video={video} />
		})
	
	return (
			<ul className='videos-list-group'>
				{generateVideoListItems}
			</ul>
		)
}

export default VideoList