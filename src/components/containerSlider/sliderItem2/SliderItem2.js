import React, {Component} from 'react';
import './SliderItem2.css';
import placeholder from './placeholder.png'

class SliderItem2 extends Component {    
    render() {
        return (
            <div className="container-slider-item2"><img src={placeholder} className="placeholder" alt="placeholder" /></div>
        )
    }
}

export default SliderItem2