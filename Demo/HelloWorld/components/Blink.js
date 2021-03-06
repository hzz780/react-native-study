import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {

    intervalTimer = null;

    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        this.intervalTimer = setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalTimer);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default Blink;