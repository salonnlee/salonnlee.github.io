import React, { Component } from 'react';
import meStyle from './index.less';

class Me extends Component {
    render() {
        return (
            <div className={meStyle.me}>
                <img
                    className={meStyle.avatar}
                    src={require('@/assets/images/me.png')}
                    alt="Me"
                />
            </div>
        );
    }
}

export default Me;
