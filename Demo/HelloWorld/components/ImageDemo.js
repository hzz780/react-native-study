import React, { Component } from 'react';
import { Text, ImageBackground, Image, View } from 'react-native';

class ImageDemo extends Component {

    render() {
        // {width: '100%', height: '100%'}
        let style = {
            width: 100,
            height: 100
        };
        let source = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538284557211&di=18dcea89b30a7f426a5b64b31b619fde&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F94cad1c8a786c91723e93522c43d70cf3ac757c6.jpg'
        };
        return (
            <View>
                <ImageBackground source={source}
                                 style={style}>
                    <Text>Inside</Text>
                </ImageBackground>
                <Image
                    source={source}
                    style={style}
                />
            </View>

        );
    }
}

export default ImageDemo;