import React, { Component } from 'react';
import styles from './index.module.less';

class CopyRight extends Component {
    render() {
        return (
            <div className={styles['copy-right']}>
                <p><i>&copy;</i> 2019 <i>lixiaolongstudio</i></p>
            </div>
        );
    }
}

export default CopyRight;
