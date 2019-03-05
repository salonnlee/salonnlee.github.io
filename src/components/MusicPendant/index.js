import React, { Component } from 'react';

import styles from './index.less';

class MusicPendant extends Component {
    render() {
        return (
            <div className={styles['musicpendant']}>
                <div id={styles['album-art']}>
                    <img
                        src="https://imagizer.imageshack.com/img924/8236/vFPfw4.jpg"
                        class=""
                        id="_1"
                        alt=""
                    />
                </div>

                <div id={styles['player-controls']}>
                    <div className={styles['control']}>
                        <div className={styles['button']} id="play-previous">
                            <i class="fas fa-backward" />
                        </div>
                    </div>

                    <div className={styles['control']}>
                        <div
                            className={styles['button']}
                            id="play-pause-button"
                        >
                            <i class="fa fa-play" />
                        </div>
                    </div>

                    <div className={styles['control']}>
                        <div className={styles['button']} id="play-next">
                            <i class="fas fa-forward" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicPendant;
