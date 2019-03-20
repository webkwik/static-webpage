import React, {Component} from 'react';
import './Loader.css';

class Loader extends Component {    
    render() {
        return (
            <div className="loader">
                <div className="loader-text">01</div>
                <div className="loader-bg">
                    <div className="loader-active"></div>
                </div>
                <div className="loader-text">03</div>
        </div>
        )
    }
}

export default Loader