import React, {Component} from "react";
import './Menu.css';
import MenuIcon from './MenuIcon.svg';

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
        return (
            <React.Fragment>
            <div className={this.state.isActive ? "menu" : "menu visibility-icon-menu"} id="menu-toggle"><img src={MenuIcon} alt="menu-icon" onClick={this.toggleMenu} /></div>

            <div className={this.state.isActive ? "container-toggle" : "container-toggle open-menu"} id="container-toggle">
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