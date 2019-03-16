import React, {Component} from "react";
import './Menu.css';
import MenuIcon from './MenuIcon.svg';
import classNames from 'classnames';

class Menu extends Component {
    constructor() {
        super()
        this.state = {
            isActive: true
        }
    }

    toggleMenu=()=>{
        this.setState({
           isActive: !this.state.isActive
         })
         console.log("menu " + this.state.isActive)
   }
    render() {
        var menuClass = classNames({
          menu: true,
          'visibility-icon-menu': !this.state.isActive
        })
        var toggleClass = classNames({
          'container-toggle': true,
          'open-menu': !this.state.isActive
        })

        return (
            <React.Fragment>
            <div className={menuClass} id="menu-toggle"><img src={MenuIcon} alt="menu-icon" onClick={this.toggleMenu} /></div>
            <div className={toggleClass} id="container-toggle">
            <div className="exit-menu" id="exit-menu" onClick={this.toggleMenu}>X</div>
            <div className="container-menu">
              <a href="#" className="menu-href">HOME</a>
              <a href="#" className="menu-href">ABOUT</a>
              <a href="#" className="menu-href">CONTACT</a>
            </div>
          </div>
          </React.Fragment>
        )
    }
}

export default Menu