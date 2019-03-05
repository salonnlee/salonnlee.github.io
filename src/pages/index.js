import React from 'react';

import MusicPendant from '../components/MusicPendant';

import styles from './index.less';

export default function() {
    return (
        <div className={styles['fullscreen']}>
            <div className={styles['container']}>
                <p className={styles['name']}>Salon Lee</p>
                <MusicPendant />
            </div>
        </div>
    );
}
