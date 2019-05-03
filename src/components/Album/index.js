import React, { Component } from "react";

import "./index.less";
import styles from "./index.module.less";

class Album extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAlbumPlay: true
        };
    }
    handleAlbumPlay = () => {
        this.setState(
            {
                isAlbumPlay: !this.state.isAlbumPlay
            },
            () => {
                this.audio && this.state.isAlbumPlay
                    ? this.audio.play()
                    : this.audio.pause();
            }
        );
    };
    render() {
        const { isAlbumPlay } = this.state;
        return (
            <React.Fragment>
                <div className={styles["album"]}>
                    <i
                        className={[
                            styles["music"],
                            !isAlbumPlay ? styles["paused"] : null
                        ].join(" ")}
                        onClick={this.handleAlbumPlay}
                    />
                </div>
                <audio
                    className={styles['audio']}
                    autoPlay
                    loop
                    preload="auto"
                    ref={audio => (this.audio = audio)}
                >
                    <source src={require("@assets/music/nobodysland.mp3")} />
                </audio>
            </React.Fragment>
        );
    }
}

export default Album;
