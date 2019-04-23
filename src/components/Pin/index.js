import React, { Component } from 'react';

import styles from './index.module.less';
import { consumeClassNames } from '../../utils/combineUtils';

class Pin extends Component {
    render() {
        const { children, isButton, ...props } = this.props;
        return (
            <div
                className={consumeClassNames([
                    styles['pin'],
                    [styles['pin-button'], isButton]
                ])}
                {...props}
            >
                {children}
            </div>
        );
    }
}

export default Pin;
