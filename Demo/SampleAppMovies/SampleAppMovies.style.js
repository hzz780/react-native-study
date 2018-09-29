import {StyleSheet} from "react-native";

let styles = StyleSheet.create({
    flastListContainer : {
        height: 300,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: '#d6d7da',
    },
    container: {
        flex: 1,
        height: 300,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    list: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
    thumbnail: {
        width: 53,
        height: 81
    }
});

export default styles;