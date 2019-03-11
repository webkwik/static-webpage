import React, {Component} from "react";
import './Search.css';
import icon from './Search.svg';

class Search extends Component {
    render() {
        return (
            <div className="icon-input">
                <form id="form" className="search-form"> 
                    <input className="search-input"  type="search" placeholder="search" />
                    <button className="button" type="button" id="button" onClick={removeElementSearch}>Close</button>
                </form>
                <img src={icon} className="search-icon" id="search" alt="search-icon" onClick={displayElementSearch} />
          </div>
        )
    }
}

function displayElementSearch() {
    var searchIcon = document.getElementById("search");
    var form = document.getElementById("form");
    var logo = document.getElementById("logo");
    if (window.matchMedia("(max-width: 960px)").matches) {
        form.classList.add("for-form-search");
        searchIcon.classList.add("for-icon-search");
        logo.classList.add("for-icon-search");
      } else {
        form.classList.add("for-form-search");
        searchIcon.classList.add("for-icon-search");
      }
  }
  
  function removeElementSearch() {
    var searchIcon = document.getElementById("search");
    var form = document.getElementById("form");
    var logo = document.getElementById("logo");
    form.classList.remove("for-form-search");
    searchIcon.classList.remove("for-icon-search");
    logo.classList.remove("for-icon-search");
  }

export default Search