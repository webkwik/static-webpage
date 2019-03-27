import React, {Component} from 'react';
import './VideoYoutube.css';
import classNames from 'classnames';
import polygon from './Polygon.svg';
import YouTube from 'react-youtube';
import Media from 'react-media';

class VideoYoutube extends Component {    
  constructor() {
    super()
    this.state = {
        isActive: true,
        player: null
    };
    this.onReady = this.onReady.bind(this);
    this.onPlayVideo = this.onPlayVideo.bind(this);
    this.onPauseVideo = this.onPauseVideo.bind(this);
}

onReady(event) {
  this.setState({
    player: event.target,
  });
  console.log('onReady');
}

onPlayVideo() {
  this.state.player.playVideo();
}

onPauseVideo() {
  this.state.player.pauseVideo();
}
  
clickVideo=()=>{
    this.setState({
       isActive: !this.state.isActive
     })
     console.log("video " + this.state.isActive)
     if(this.state.isActive) {
      this.onPlayVideo();
    } else {
      this.onPauseVideo();
    }
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

        const opts = {
          height: '310',
          width: '400',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        }
 
        const optsMob = {
          height: '310',
          width: '280',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        }

        return (
            <React.Fragment>
            <div className={videoClass} id="video">
            <div className="button-play" id="button-play" onClick={this.clickVideo}>
              <img src={polygon} className="play" alt="play" />
            </div>
          </div>
          <div className={youtubeVideoClass} id="video-youtube">

          <Media query="(max-width: 960px)">{
                <YouTube videoId="h2Jdj4iLIUU" opts={matches => matches ? opts : optsMob} onReady={this.onReady} />
              }
          </Media>

                <div className="exit-video" id="exit-video" onClick={this.clickVideo}>X</div>
          </div>
          </React.Fragment>
        )
    }
}

export default VideoYoutube