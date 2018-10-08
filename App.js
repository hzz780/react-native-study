import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';

// import Navigation from './Demo/Navigation/Navigation';

import HelloWorldApp from './Demo/HelloWorld/App';
import SampleAppMovies from './Demo/SampleAppMovies/SampleAppMovies'
import ELFDemo from './Demo/ELF/ELF.demo'


import { createStackNavigator, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Home Screen</Text>
//                 <Button
//                     title="Go to Details"
//                     onPress={() => this.props.navigation.navigate('Details')}
//                 />
//                 <Button
//                     title="Go to HelloWorld"
//                     onPress={() => this.props.navigation.navigate('HelloWorld')}
//                 />
//                 <Button
//                     title="Go to SampleAppMovies"
//                     onPress={() => this.props.navigation.navigate('SampleAppMovies')}
//                 />
//             </View>
//         );
//     }
// }
//
// class DetailsScreen extends Component {
//     render() {
//         // this.props.navigation.navigate 不会重复打开当前页。
//         // this.props.navigation.push 可以，比如百家号，点击底部更多新闻跳转到一个新的新闻页。
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//                 <Button
//                     title="Go to Details... again"
//                     onPress={() => this.props.navigation.push('Details')}
//                 />
//                 <Button
//                     title="Go back"
//                     onPress={() => this.props.navigation.goBack()}
//                 />
//                 <Button
//                     title="Go Home"
//                     onPress={() => this.props.navigation.navigate('Home')}
//                 />
//             </View>
//         );
//     }
// }
//
// // RootStack组件不接受任何 props
// const RootStack = createStackNavigator(
//     {
//         HelloWorld: HelloWorldApp,
//         Home: HomeScreen,
//         Details: DetailsScreen,
//         SampleAppMovies: SampleAppMovies,
//     },
//     {
//         initialRouteName: 'HelloWorld',
//     }
// );
//
// export default class App extends Component {
//     render() {
//         return <RootStack />;
//     }
// }



class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={{
                    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538284557211&di=18dcea89b30a7f426a5b64b31b619fde&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c91723e93522c43d70cf3ac757c6.jpg'
                }}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.openDrawer()}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={
                    {
                        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538284557211&di=18dcea89b30a7f426a5b64b31b619fde&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c91723e93522c43d70cf3ac757c6.jpg'
                    }
                }
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

// // RootStack组件不接受任何 props
// const RootStack = createStackNavigator(
//     {
//         HelloWorld: HelloWorldApp,
//         Home: HomeScreen,
//         Details: DetailsScreen,
//         SampleAppMovies: SampleAppMovies,
//     },
//     {
//         initialRouteName: 'HelloWorld',
//     }
// );

const MyApp = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
    HelloWorld: {
        screen: HelloWorldApp
    },
    ELFDemo: {
        screen: ELFDemo
    }
});

export default class App extends Component {
    render() {
        return <MyApp />;
    }
}