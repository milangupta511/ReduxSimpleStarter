import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import _ from 'lodash'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY = 'AIzaSyCcP1AF5gHcavDDxS_eq3g0Y2xqq86zxxM'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		}
		this.onSearchKeyChange('about youtube')
	}
	onSearchKeyChange(term){
		YTSearch({key: API_KEY, term}, (videos) => this.setState({videos, selectedVideo: videos[0]}))
	}
	render(){
		const videoSearch = _.debounce((term) => this.onSearchKeyChange(term), 300)
		return (
			<div>
				<SearchBar onSearchKeyChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList 
				onVideoSelect={selectedVideo => this.setState({selectedVideo})}
				videos={this.state.videos} />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('.container'))
