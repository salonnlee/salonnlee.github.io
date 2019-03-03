import React from 'react';
import './index.less';

function BasicLayout(props) {
    return <React.Fragment>{props.children}</React.Fragment>;
}

export default BasicLayout;
