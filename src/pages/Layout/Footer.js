import  React from 'react'
import {connect} from 'react-redux'

class Footer extends React.Component {
    constructor(props) {
        super(props);

        let now = new Date(), hour = now.getHours(), min = now.getMinutes();
        this.state = {
            now: (hour < 10 ? ('0' + hour) : hour) + ":" + (min < 10 ? ('0' + min) : min)
        };
    }
    render() {
        return (
            <footer className="footer">
                Is footer. Page generated at {this.state.now}.
            </footer>
        );
    }
}

export default connect()(Footer)