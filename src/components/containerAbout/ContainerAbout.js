import React, {Component} from 'react';
import './ContainerAbout.css';
import AboutTitleText from './aboutTitleText/AboutTitleText';
import AboutPlaceholder from './aboutPlaceholder/AboutPlaceholder';
class ContainerAbout extends Component {    
    render() {
        return (
            <div className="container-about">
                <AboutPlaceholder />
                <AboutTitleText />
            </div>
        )
    }
}

export default ContainerAbout