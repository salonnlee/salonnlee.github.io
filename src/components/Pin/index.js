import React, { Component } from 'react';

import styles from './index.module.less';

class Pin extends Component {
    render() {
        const { isButton } = this.props;
        const { children } = this.props;
        return <div className={styles['pin']}>{children}</div>;
    }
}

export default Pin;
