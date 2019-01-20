import React, { Component } from 'react';
import styles from './index.module.less';

class Monoarch extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className={styles.curtain}>
                <div className={styles.container}>
                    <img
                        className={styles.avatar}
                        src={require('./images/me.png')}
                        alt="salonnlee"
                    />
                    <h2>Salon Lee</h2>
                    <span>FRONT-END DEVELOPER</span>
                    <div className={styles.social}>
                        <a
                            href="https://github.com/salonnlee"
                            className={styles.github}
                        />
                        <a href className={styles.wechat} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Monoarch;
