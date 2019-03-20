import React, {Component} from 'react';
import './VideoYoutube.css';
import classNames from 'classnames';
import polygon from './Polygon.svg';

class VideoYoutube extends Component {    
  constructor() {
    super()
    this.state = {
        isActive: true
    }
}

playVideo=()=>{
    this.setState({
       isActive: !this.state.isActive
     })
     console.log("video " + this.state.isActive)
}
    render() {
        const videoClass = classNames ({
            'video': true,
            'for-video': !this.state.isActive
        })
        const youtubeVideoClass = classNames ({
          'video-youtube': true,
          'for-video-youtube': !this.state.isActive
        })

        return (
            <React.Fragment>
            <div className={videoClass} id="video">
            <div className="button-play" id="button-play" onClick={this.playVideo}>
              <img src={polygon} className="play" alt="play" />
            </div>
          </div>
          <div className={youtubeVideoClass} id="video-youtube">
              <iframe width="400" height="310" src="https://www.youtube.com/embed/h2Jdj4iLIUU?&enablejsapi=1&autoplay=0" allow="autoplay" frameborder="0" className="iframe-video" title="youtube"></iframe>
              <div className="exit-video" id="exit-video" onClick={this.playVideo}>X</div>
          </div>
          </React.Fragment>
        )
    }
}
  
  function stopVideo() {
    var frameVideo = document.getElementsByClassName("iframe-video");
    frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
  
  function playVideo() {
    var frameVideo = document.getElementsByClassName("iframe-video");
    frameVideo.item(0).contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
  
export default VideoYoutube