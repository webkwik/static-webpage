import React, {Component} from 'react';
import './SliderItem1.css';
import BlueButton from './blueButton/BlueButton';
import Loader from './loader/Loader';
import SliderTitleText from './sliderTitleText/SliderTitleText';

class SliderItem1 extends Component {    
    render() {
        return (
            <div className="container-slider-item1">
              <SliderTitleText />
              <BlueButton />
              <Loader />
              </div>
        )
    }
}

export default SliderItem1