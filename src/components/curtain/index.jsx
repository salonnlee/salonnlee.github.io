import React, { Component } from 'react';
import styles from './index.module.less';
import { Popover } from 'antd';

class Monoarch extends Component {
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
                        {/* => @ github 章鱼猫 */}
                        <a
                            href="https://github.com/salonnlee"
                            className={styles.github}
                        />
                        {/* => @ jike 即刻 */}
                        <a 
                            href="https://web.okjike.com/user/3cd15d0a-74d9-44fa-87dd-dff84e0dc8f5"
                            className={styles.okjike}
                        />
                        {/* => @ juejin 掘金 */}
                        <a 
                            href="https://juejin.im/user/5a90166851882518c0797f50"
                            className={styles.juejin}
                        />
                        {/* => @ wechat 微信 */}
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
