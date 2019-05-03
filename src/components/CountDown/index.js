import React, { Component } from "react";
import { moment } from "../../utils/baseUtils";

import styles from "./index.module.less";

class CountDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targetDate: moment("2019-09-15").valueOf(),
            currentDate: moment().valueOf()
        };
    }
    componentDidMount() {
        this.countdown = setInterval(() => {
            this.setState({
                currentDate: moment().valueOf()
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.countdown);
        this.countdown = null;
    }
    handleCountDownDays = (targetDate, currentDate) => {
        const leftDays =
            Math.ceil(moment.duration(targetDate - currentDate).asDays()) + 1;

        return leftDays > 0 ? leftDays : '❤';
    };
    render() {
        const { targetDate, currentDate } = this.state;

        return (
            <div className={styles["countdown"]}>
                {this.handleCountDownDays(targetDate, currentDate)}
            </div>
        );
    }
}

export default CountDown;
