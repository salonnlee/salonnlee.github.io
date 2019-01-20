import React, { Component } from 'react';
import styles from './index.module.less';

class WaterDrop extends Component {
    render() {
        return (
            <div className={styles['waterdrop']}>
                <div className={styles['topbar']}>
                    <h3>Whisper</h3>
                </div>
                <div className={styles['content']}>
                    
                </div>
            </div>
        );
    }
}

export default WaterDrop;
