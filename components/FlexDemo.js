import React, { Component } from 'react';
import { Text, View } from 'react-native';

class FlexDemo extends Component {

    render() {
        return (
            <View>
                <Text>RN 的 View的集合需要包裹在View下</Text>
                <View style={{ width: 100, height: 100}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>

                <View style={{
                    width: 200,
                    height: 200,
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
                </View>

                <Text> line </Text>
                <View style={{
                    width: 200,
                    height: 200,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                    <View style={{width: 20, height: 50, backgroundColor: 'skyblue'}} />
                    <View style={{width: 30, height: 100, backgroundColor: 'steelblue'}} />
                </View>
            </View>
        );
    }
}

export default FlexDemo;