import React, {Component} from 'react';
import './AboutUser.css';
import user from './about-user.png';

class AboutUser extends Component {    
    render() {
        return (
            <div className="about-user">
            <img src={user} className="about-user-img" alt="about-user-img" />
            <div className="about-name-position">
              <div className="about-name">Denis Shepovalov</div>
              <div className="about-position">Co-Founder & CEO</div>
            </div>
          </div>
        )
    }
}

export default AboutUser