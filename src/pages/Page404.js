import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'

class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container page-home">
                <div className="m_mb20">404 Not found</div>
                <button className="btn btn-green btn-medium m_mb20" onClick={this.props.tmp_count_plus}>count++</button>
            </div>
        );
    }
}

export default withRouter(Page404);