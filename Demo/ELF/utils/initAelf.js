/*
 * huangzongzhe,hzz780
 * 2018.07.30
 * init aelf
 */
// import Aelf from 'aelf-sdk'
import AelfSDK from './aelf.web'
import config from '../config'
// import { hashHistory } from 'react-router'

let hasAlert = false;
// 如果传入了password，则使用私人账户来操作。
// 如果传入了password, 需要在组件内方法执行initAelf
function init (options = {}) {

    // let {password, contractAddress, chainOnly} = options;

    let contractAddress = '0xfe9f895a9f425c4ec3dc5c54bfce9908f03b';
    let chainOnly = true;
    let password = '';

    let wallet = '';
    if (password) {
        let walletAddress = JSON.parse(localStorage.getItem('lastuse')).address;
        let walletInfoList = JSON.parse(localStorage.getItem('walletInfoList'));
        let AESEncryptoPrivateKey = walletInfoList[walletAddress].AESEncryptoPrivateKey;

        let privateKey = '';
        try {
            privateKey = Aelf.wallet.AESDecrypto(AESEncryptoPrivateKey, password);
        } catch (e) {
            return error('wrong password, program crash.');
        }
        if (!privateKey) {
            return error('wrong password.');
        }
        wallet = Aelf.wallet.getWalletByPrivateKey(privateKey);
    } else {
        // 公共账户用来进行查询操作。需要转账操作时,再使用用户的账户。
        wallet = Aelf.wallet.getWalletByPrivateKey(window.defaultConfig.commonPrivateKey);
    }

    let aelf = new Aelf(new Aelf.providers.HttpProvider(window.defaultConfig.httpProvider));

    try {
        aelf.chain.connectChain();
    } catch (e) {
        // hashHistory.push('/error');
    }
    let contractMethods = chainOnly
        ? {} : aelf.chain.contractAt(contractAddress || window.defaultConfig.mainContract, wallet);

    // 固定合约，如果没有对应的方法，返回'非法合约'的信息。
    if (!chainOnly && !contractMethods.TokenName && !hasAlert) {
        hasAlert = true;
        alert('合约未部署;不匹配的合约');
    }

    return {
        aelf: aelf,
        contractMethods: contractMethods
    };
}

export default init

// TODO, 整理一套返回格式。
function error (msg) {
    return {
        errormsg: msg
    };
}