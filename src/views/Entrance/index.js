import React, { Component } from 'react';

import styles from './index.module.less';
import Pin from '../../components/Pin';

class Entrance extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className={styles['entrance']}>
                <div className={styles['navigator']}>
                    <Pin isButton onClick={() => history.push('/daysgoby')}>
                        年华
                    </Pin>
                    <Pin isButton onClick={() => history.push('/organiser')}>
                        手账
                    </Pin>
                    <Pin isButton onClick={() => history.push('/corner')}>
                        墙隅
                    </Pin>
                </div>
            </div>
        );
    }
}

export default Entrance;
