import React, {Component} from 'react';
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import {tmp_count_plus} from '../common/Actions'
import {bindActionCreators} from 'redux'

class PageTest extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container page-home">
                <div className="m_mb20">page test</div>
                <button className="btn btn-green btn-medium m_mb20" onClick={this.props.tmp_count_plus}>count++</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageTest))