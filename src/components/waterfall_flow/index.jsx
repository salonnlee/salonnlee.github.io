import React, { Component } from 'react';
import styles from './index.module.less';
import WaterDrop from '../waterdrop/index';
import { Card, Icon } from 'antd';

class WaterfallFlow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // => TODO: 数据源要从静态数据库里拿, 或者本地 json 文件
            waterDropList: [
                {
                    title: (
                        <>
                            <del>新年 flag</del> 年前 todo{' '}
                        </>
                    ),
                    content: (
                        <div>
                            <Card
                                title=""
                                style={{
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                    width: 450,
                                    fontFamily: 'Fira Code'
                                }}
                            >
                                <p>- react 重构 mc 平台</p>
                                <p>- mobx 优化爆料 mc</p>
                                <p>- egg 孵化 node 上层架构</p>
                                <p>
                                    - vue H5 性能优化 (着重点 pwa && skeleton)
                                </p>
                            </Card>
                            {/* => TODO: 暂时 */}
                            <a
                                style={{
                                    borderBottom: '1px solid #1890ff',
                                    display: 'inline-block',
                                    textAlign: 'right',
                                    float: 'right'
                                }}
                                href
                            >
                                彩蛋你跑去哪里啊
                                <Icon
                                    style={{
                                        fontSize: 12,
                                        marginLeft: '7px'
                                    }}
                                    type="double-right"
                                />
                            </a>
                        </div>
                    )
                },
                {
                    title: '扫码 biubiubiu',
                    content: (
                        <img
                            style={{
                                display: 'block'
                            }}
                            src={require('../../assets/images/admire.png')}
                        />
                    )
                }
            ]
        };
    }
    render() {
        const { waterDropList } = this.state;
        return (
            <div className={styles['waterfall-flow']}>
                {waterDropList.map(waterDrop => (
                    <WaterDrop title={waterDrop.title}>
                        {waterDrop.content}
                    </WaterDrop>
                ))}
            </div>
        );
    }
}

export default WaterfallFlow;
