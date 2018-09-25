import React from 'react';
import {withRouter, Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return <header className="header">
            <div className="container header-container">
                <Link className="header__link" to={"/"}>Home</Link>
                <Link className="header__link" to={"/test"}>Test</Link>
                <Link className="header__link" to={"/layout"}>Layout</Link>
            </div>
        </header>;
    }
}

//withRouter нужен для обновления компонента после обновления роута
export default withRouter(Header)

