import React, {Component} from 'react';
import './ContainerSlider.css';
import SliderItem2 from './sliderItem2/SliderItem2';
import SliderItem1 from './sliderItem1/SliderItem1';
import VideoYoutube from './videoYoutube/VideoYoutube';

class ContainerSlider extends Component {    
    render() {
        return (
        <div className="container-slider">
            <SliderItem1 />
            <SliderItem2 />
            <VideoYoutube />
        </div>
        )
    }
}

export default ContainerSlider