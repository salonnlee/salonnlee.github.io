import React, { Component } from 'react';
import './index.modules.less';
import './todolist.modules.less';

class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [
                {
                    title: 'egg (nodejs internals)',
                    percent: '5%',
                    name: 'egg',
                    style: {
                        backgroundColor: '#53BC7C'
                    }
                },
                {
                    title: 'styleguidist and storybook (doc generate)',
                    percent: '10%',
                    name: 'doc',
                    style: {
                        backgroundColor: '#F1618C'
                    }
                },
                {
                    title: 'store orm (database and restful)',
                    percent: '0%',
                    name: 'orm',
                    style: {
                        backgroundColor: '#2F79B9'
                    }
                },
                {
                    title: 'styled-components (css)',
                    percent: '15%',
                    name: 'style',
                    style: {
                        backgroundColor: '#DB9E5E'
                    }
                }
            ]
        };
    }
    render() {
        console.log(this);
        const { todolist } = this.state;
        return (
            <div className="dashboard">
                <div className="move">
                    {/* => @TEMP todolist 土豆清单 */}
                    {todolist.map(todo => (
                        <div className="progress-container">
                            <div className="progressbar-title">
                                <h3>{todo.title}</h3>
                                <span className="percent">{todo.percent}</span>
                            </div>
                            <div className="bar-container">
                                <span
                                    className="progressbar progressed"
                                    style={{
                                        ...todo.style,
                                        width: todo.percent
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DashBoard;
