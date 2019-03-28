import React, {Component} from 'react';
import './AboutPlaceholder.css';
import placeholderAbout from './placeholder-about.png';

class AboutPlaceholder extends Component {    
    render() {
        return (
            <img src={placeholderAbout} className="placeholder-about" alt="placeholder-about" />
        )
    }
}

export default AboutPlaceholder