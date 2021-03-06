import React, { Component } from 'react';
import { Text, View } from 'react-native';

async function getTransactions() {
    try {
        // let response = await fetch('https://wallet-test.aelf.io/block/api/address/transactions?'
        //         + 'limit=20&page=0&order=desc&address=0x040d68ec9286583d495a04196def02004a07&'
        //         + 'contract_address=0xed535a7c9da9112df9a8e2275bffa887fae2&');

        // 按文档来看，按规则的话，要使用HTTPS协议。
        let response = await fetch('http://localhost:7000/block/api/address/tokens?'
                + 'limit=20&page=0&order=desc&address=0x040a221885855c22714e764f5a3de674554e&');

        let responseJson = await response.json();
        // alert(JSON.stringify(responseJson));
        console.log('FetchDemo: >>>>>>>>>>>');
        console.log(JSON.stringify(responseJson));
        // return responseJson;
    } catch (e) {
        alert(e);
        return 0;
    }
}

export default class FetchDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Fetch Test' };
    }

    componentDidMount() {
        let text = getTransactions();
        // this.setState({text});
    }

    render() {
        return (
            <Text>{this.state.text}</Text>
        );
    }
}