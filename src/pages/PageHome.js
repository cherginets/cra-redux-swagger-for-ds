import React, {Component} from 'react';
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import {bindActionCreators} from 'redux'
import {tmp_count_plus} from '../common/Actions'

class PageHome extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container page-home">
                <div className="m_mb20">page home</div>
                <Link className="m_mb20" to={"/test"}>go to page test</Link>
                <Link className="m_mb20" to={"/layout"}>go to page layout</Link>
                <button className="m_mb20" onClick={this.props.tmp_count_plus}>count++</button>
                count = {this.props.global.count}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    global: state.global,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    tmp_count_plus,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageHome))