import React, { Component } from 'react';
import styles from './index.module.less';
import { Popover } from 'antd';

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
                        src={require('../../assets/images/me.png')}
                        alt="salonnlee"
                    />
                    <h2>Salon Lee</h2>
                    <span>FRONT-END DEVELOPER</span>
                    <div className={styles.social}>
                        <a
                            href="https://github.com/salonnlee"
                            className={styles.github}
                        />
                        <Popover
                            placement="right"
                            content={
                                <img
                                    width={168}
                                    height={168}
                                    src={require('../../assets/images/qrcode.jpg')}
                                />
                            }
                        >
                            <a href className={styles.wechat} />
                        </Popover>
                    </div>
                </div>
            </div>
        );
    }
}

export default Monoarch;
