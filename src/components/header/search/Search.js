import React, {Component} from 'react';
import './Search.css';
import icon from './Search.svg';
import classNames from 'classnames';

class Search extends Component {
    render() {
        let searchFormClass = classNames ({
            'search-form': true,
            'for-form-search': !this.props.isActive
        })
        let searchIconClass = classNames ({
            'search-icon': true,
            'for-icon-search': !this.props.isActive
        })
        return (
            <div className="icon-input">
                <form id="form" className={searchFormClass}> 
                    <input className="search-input"  type="search" placeholder="search" />
                    <button className="button" type="button" id="button" onClick={this.props.searchIcon}>Close</button>
                </form>
                <img src={icon} className={searchIconClass} id="search" alt="search-icon" onClick={this.props.searchIcon} />
          </div>
        )
    }
}

export default Search