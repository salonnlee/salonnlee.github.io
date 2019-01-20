import React, { Component } from 'react';
import styles from './index.module.less';

class WaterDrop extends Component {
    render() {
        const { title, children } = this.props;
        return (
            <div className={styles['waterdrop']}>
                <div className={styles['topbar']}>
                    <h3>{title}</h3>
                </div>
                <div className={styles['content']}>{children}</div>
            </div>
        );
    }
}

export default WaterDrop;
