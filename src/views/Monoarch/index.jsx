import React, { Component } from 'react';
import Curtain from '../../components/curtain/index';
// import CopyRight from '../../components/copy_right/index';
import WaterfallFlow from '../../components/waterfall_flow/index';

class Monoarch extends Component {
    render() {
        return (
            <>
                <Curtain />
                <WaterfallFlow />
                {/* <CopyRight /> */}
            </>
        );
    }
}

export default Monoarch;
