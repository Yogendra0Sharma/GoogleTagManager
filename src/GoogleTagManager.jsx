import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import TagManager from 'react-gtm-module'

import "./ui/GoogleTagManager.css";

class GoogleTagManager extends Component {

    componentDidMount(){
        const tagManagerArgs = {
            gtmId: this.props.gtmId
        }
        TagManager.initialize(tagManagerArgs)
    }
    render() {
        return null;
    }
}

export default hot(GoogleTagManager);
