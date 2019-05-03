import React, { Component } from "react";

import { Popover } from "antd";

import styles from "./index.module.less";

class Home extends Component {
    render() {
        return (
            <div className={styles["dashboard"]}>
                <div className={styles["curtain"]}>
                    <div className={styles["avatar"]} />
                </div>
                <div className={styles["intro"]}>
                    <h6 className={styles["name"]}>Salon Lee</h6>
                    <div className={styles["socials"]}>
                        <i className={styles["github"]}>
                            <a
                                href="https://github.com/salonnlee"
                                target="_blank"
                            />
                        </i>
                        <i className={styles["juejin"]}>
                            <a
                                href="https://juejin.im/user/5a90166851882518c0797f50"
                                target="_blank"
                            />
                        </i>
                        <i className={styles["jianshu"]}>
                            <a
                                href="https://www.jianshu.com/u/8bef2f6f3988"
                                target="_blank"
                            />
                        </i>
                        <i className={styles["wechat"]}>
                            <Popover
                                placement="right"
                                content={
                                    <i className={styles["wechat-qrcode"]} />
                                }
                            >
                                <a />
                            </Popover>
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
