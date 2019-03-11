import React, {Component} from 'react';
import './Header.css';
import Logo from './logo/Logo';
import Search from './search/Search';
import Menu from './menu/Menu';

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