import React, { Component } from 'react';
import styles from './index.module.less';
import WaterDrop from '../waterdrop/index';

class WaterfallFlow extends Component {
    render() {
        return <div className={styles['waterfall-flow']}>
            <WaterDrop />
        </div>;
    }
}

export default WaterfallFlow;
