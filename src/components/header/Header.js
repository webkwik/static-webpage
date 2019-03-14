import React, {Component} from 'react';
import './Header.css';
import LogoSearch from './logoSearch/LogoSearch';
import Menu from './menu/Menu';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container-header">  
                        <LogoSearch />
                        <Menu />
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header 