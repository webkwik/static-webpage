import React, {Component} from 'react';
import './LogoSearch.css';
import icon from './Search.svg';
import Media from 'react-media';
import classNames from 'classnames';

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
        var logoClass = classNames ({
            logo: true,
            'for-icon-search': !this.state.isActive
        })
        var searchFormClass = classNames ({
            'search-form': true,
            'for-form-search': !this.state.isActive
        })
        var searchIconClass = classNames ({
            'search-icon': true,
            'for-icon-search': !this.state.isActive
        })
        return (
            <React.Fragment>
                <Media query="(max-width: 960px)">{
                    matches => matches ? (<div className={logoClass} id="logo">Gravity</div>) : (<div className="logo" id="logo">Gravity</div>)
                }
                </Media>
            <div className="icon-input">
                <form id="form" className={searchFormClass}> 
                    <input className="search-input"  type="search" placeholder="search" />
                    <button className="button" type="button" id="button" onClick={this.searchIcon}>Close</button>
                </form>
                <img src={icon} className={searchIconClass} id="search" alt="search-icon" onClick={this.searchIcon} />
          </div>
          </React.Fragment>
        )
    }
}

export default LogoSearch