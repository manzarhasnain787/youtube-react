import React from 'react'
// component imports
import VideoListItem from './video_list_item'

const VideoList = ({ videos, onSelectedVideo }) => {
  const VideoListIcon = videos.map( video => <VideoListItem video = {video} key = { video.etag } onSelectedVideo = { onSelectedVideo }/>)
  return (
    <ul className = 'col-md-4 list-group'>
      { VideoListIcon }
    </ul>
  )
}

export default VideoList
