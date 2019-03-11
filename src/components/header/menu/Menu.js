import React, {Component} from "react";
import './Menu.css';
import MenuIcon from './MenuIcon.svg';

class Menu extends Component {
    render() {
        return (
            <div className="menu" id="menu-toggle"><img src={MenuIcon} alt="menu-icon" onClick={addClass} /></div>
        )
    }
}

function addClass() {
    var menu = document.getElementById("menu-toggle");
    var containerToggle = document.getElementById("container-toggle");
    containerToggle.classList.add("open-menu");
    menu.classList.add("visibility-icon-menu");
  }

export default Menu