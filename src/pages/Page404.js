import React, {Component} from 'react';
import { withRouter, Link} from 'react-router-dom'

class Page404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                404 <Link to={"/"}>go to page home</Link>
            </div>
        );
    }
}

export default withRouter(Page404);