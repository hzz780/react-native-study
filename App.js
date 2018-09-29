import React, { Component } from 'react';
import { Text, Image, View, ScrollView, Button } from 'react-native';

// import Navigation from './Demo/Navigation/Navigation';

import HelloWorldApp from './Demo/HelloWorld/App';
import SampleAppMovies from './Demo/SampleAppMovies/SampleAppMovies'

import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                <Button
                    title="Go to HelloWorld"
                    onPress={() => this.props.navigation.navigate('HelloWorld')}
                />
                <Button
                    title="Go to SampleAppMovies"
                    onPress={() => this.props.navigation.navigate('SampleAppMovies')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

// RootStack组件不接受任何 props
const RootStack = createStackNavigator(
    {
        HelloWorld: HelloWorldApp,
        Home: HomeScreen,
        Details: DetailsScreen,
        SampleAppMovies: SampleAppMovies,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}