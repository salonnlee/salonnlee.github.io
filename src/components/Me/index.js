import React, { Component } from 'react';
import './index.modules.less';

class Me extends Component {
    render() {
        return (
            <div className="me">
                <img
                    className="avatar"
                    src={require('@assets/images/me.png')}
                    alt="Me"
                />
            </div>
        );
    }
}

export default Me;
