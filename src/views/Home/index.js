import React, { Component } from 'react';

import styles from './index.module.less';
import Button from '../../components/Button';

class Home extends Component {
    render() {
        return (
            <div className={styles['wrapper']}>
                <div className={styles['buttons']}>
                    <Button>TODOLIST</Button>
                </div>
            </div>
        );
    }
}

export default Home;
