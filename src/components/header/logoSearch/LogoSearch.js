import React, {Component} from 'react';
import './LogoSearch.css';
import icon from './Search.svg';
import Media from 'react-media';

class LogoSearch extends Component {
    constructor() {
        super()
        this.state = {
            isActive: true
        }
    }

    searchIcon=()=>{
        this.setState({
           isActive: !this.state.isActive
         })
         console.log("search " + this.state.isActive)
   }

    render() {
        return (
            <React.Fragment>
                <Media query="(max-width: 960px)">{
                    matches => matches ? (<div className={this.state.isActive ? "logo" : "logo for-icon-search"} id="logo">Gravity</div>) : (<div className="logo" id="logo">Gravity</div>)
                }
                </Media>
            <div className="icon-input">
                <form id="form" className={this.state.isActive===true ? "search-form" : "search-form for-form-search"}> 
                    <input className="search-input"  type="search" placeholder="search" />
                    <button className="button" type="button" id="button" onClick={this.searchIcon}>Close</button>
                </form>
                <img src={icon} className={this.state.isActive===true ? "search-icon" : "search-icon for-icon-search"} id="search" alt="search-icon" onClick={this.searchIcon} />
          </div>
          </React.Fragment>
        )
    }
}

export default LogoSearch