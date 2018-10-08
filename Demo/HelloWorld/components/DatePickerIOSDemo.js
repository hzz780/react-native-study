import React, { Component } from 'react'
import {Platform, Text} from 'react-native'
import {
    DatePickerIOS,
    View,
    StyleSheet,
} from 'react-native'

export default class DatePickerIOSDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { chosenDate: new Date() };

        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate})
    }

    render() {
        if (Platform.OS !== 'ios') {
            return (
                <View>
                    <Text>iOS平台特有功能</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <DatePickerIOS
                        date={this.state.chosenDate}
                        onDateChange={this.setDate}
                    />
                </View>
            )
        }

    }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 300,
        justifyContent: 'center'
    },
})