import React, { Component } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import Blink from './components/Blink.js'
import PizzaTranslator from './components/PizzaTranslator.js'
import FlexDemo from './components/FlexDemo.js'
import ButtonBasics from './components/ButtonBasics.js'
import Touchable from './components/Touchable.js'
import FlatListDemo from './components/FlatListDemo.js'
import SectionListBasics from './components/SectionListBasics.js'
import FetchDemo from './components/FetchDemo.js'
import styles from './App.style.js'

// Demo 集合
import SampleAppMovies from '../SampleAppMovies/SampleAppMovies';

// import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

// react-native-debugger
import networkInspect from '../../utils/react-native-debugger/networkInspect';
networkInspect();


class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}

export default class HelloWorldApp extends Component {
// class HelloWorldApp extends Component {
    render() {

        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };

        // 组件能够撑满剩余空间的前提是其父容器的尺寸不为零。
        // <ButtonBasics />
        // <Touchable />
        return (
            <ScrollView style={{ marginTop: 20 }}>
                <Text>Hellow World Demo</Text>
                <SampleAppMovies />

                <ButtonBasics />
                <Touchable />

                <Text style={styles.demoTitle}>FlatList和SectionList的底层实现是 VirtualizedList</Text>
                <FlatListDemo />
                <SectionListBasics />
                <Text>FetchDemo</Text>
                <FetchDemo />

                <Text style={styles.welcome}>Hello world!</Text>
                <Image source={pic} style={{width: 193, height: 110}} />
                <Greeting name='hzz780' />
                <Greeting name='hzz781' />
                <Greeting name='hzz782' />
                <Greeting name='hzz783' />

                <PizzaTranslator />

                <Text style={styles.demoTitle}>FlexDemo</Text>
                <FlexDemo />

                <View style={styles.textContainer}>
                    <Text>
                        textContainer
                    </Text>
                </View>
                <Blink text="blinkTest"/>
            </ScrollView>
        );
    }
}