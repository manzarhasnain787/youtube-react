import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
// components import
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// constants
const API_KEY = 'AIzaSyDFc1Zo7DTWl6dekS_liU3W82XnOzyd4uY'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('Love me like you do')
  }
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => this.setState({
      videos,
      selectedVideo: videos[0]
    }))
  }
  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term)}, 500)
    return (
      <div>
          <SearchBar onSearchTermChange = { videoSearch }/>
          <VideoDetail video = { this.state.selectedVideo } />
          <VideoList videos = { this.state.videos } onSelectedVideo = { selectedVideo => this.setState({ selectedVideo }) } />
      </div>
    )
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
