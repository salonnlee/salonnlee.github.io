import React, { Component } from 'react';

import styles from './index.module.less';

class Entrance extends Component {
    render() {
        return (
            <div className={styles['container']}>
                {/* @TODO 背景3d特效, 目前正在办进度条 && 待办放置区, 今年日程表 */}
                <div className={styles['navigator']}>待办|日程|前端</div>
            </div>
        );
    }
}

export default Entrance;
