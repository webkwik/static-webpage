import React, {Component} from "react";
import './Search.css';
import icon from './Search.svg';

class Search extends Component {
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
         console.log(this.state.isActive)
   }

    render() {
        return (
            <div className="icon-input">
                <form id="form" className={this.state.isActive===true ? "search-form" : "search-form for-form-search"}> 
                    <input className="search-input"  type="search" placeholder="search" />
                    <button className="button" type="button" id="button" onClick={this.searchIcon}>Close</button>
                </form>
                <img src={icon} className={this.state.isActive===true ? "search-icon" : "search-icon for-icon-search"} id="search" alt="search-icon" onClick={this.searchIcon} />
          </div>
        )
    }
}

export default Search