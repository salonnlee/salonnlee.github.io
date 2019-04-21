import React, { Component } from 'react';

import styles from './index.module.less';
import Pin from '../../components/Pin';

class Entrance extends Component {
    render() {
        return (
            <div className={styles['entrance']}>
                <div className={styles['navigator']}>
                    <Pin isButton>
                        <span>张烤全</span>
                    </Pin>
                </div>
            </div>
        );
    }
}

export default Entrance;
