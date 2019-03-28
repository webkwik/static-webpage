import React, {Component} from 'react';
import './AboutTitleText.css';
import AboutUser from './aboutUser/AboutUser';

class AboutTitleText extends Component {    
    render() {
        return (
          <div className="about-title-text">
            <div className="about-title">We solve digital problems with an outstanding creative flare</div>
            <div className="about-text">The best time to view the moon, obviously, is at night when there are few clouds and the weather is accommodating for a long and lasting study.</div>
            <div className="about-text margin-for-about">For most of us, the idea of astronomy is something we directly connect to “stargazing”, telescopes and seeing magnificent displays in the heavens.</div>
            <AboutUser />
          </div>
        )
    }
}

export default AboutTitleText