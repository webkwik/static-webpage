import React, {Component} from 'react';
import './Header.css';
import Logo from './header/Logo';
import Search from './header/Search';
import Menu from './header/Menu';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container-header">
                        <Logo />
                        <Search />
                        <Menu />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header 