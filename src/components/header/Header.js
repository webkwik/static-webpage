import React, {Component} from 'react';
import './Header.css';
import Logo from './logo/Logo';
import Menu from './menu/Menu';
import Search from './search/Search';

class Header extends Component {
    constructor() {
        super()
        this.state = {
            isActive: true
        }
        this.searchIcon = this.searchIcon.bind(this);
    }

    searchIcon=()=>{
        this.setState({
           isActive: !this.state.isActive
         })
         console.log("header " + this.state.isActive)
   }

    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container-header">  
                        <Logo isActive={this.state.isActive} />
                        <Search searchIcon={this.searchIcon} isActive={this.state.isActive} />
                        <Menu />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header 