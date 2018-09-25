import React, {Component} from 'react';
import { withRouter, Link} from 'react-router-dom'

class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container page-home">
                <div className="m_mb20">404 Not found</div>
                <Link className="m_mb20" to={"/"}>go to page home</Link>
                <Link className="m_mb20" to={"/test"}>go to page test</Link>
                <Link className="m_mb20" to={"/layout"}>go to page layout</Link>
                <button className="btn btn-green btn-medium m_mb20" onClick={this.props.tmp_count_plus}>count++</button>
                count = {this.props.global.count}
            </div>
        );
    }
}

export default withRouter(Page404);