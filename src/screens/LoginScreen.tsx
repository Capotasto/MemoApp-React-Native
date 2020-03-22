import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default class LoginScreen extends React.Component {
    render() {
        return (
            <View style={styles.loginScreen}>
                <Text style={styles.loginTitle}　>ログイン</Text>
                <TextInput style={styles.loginTextInput} value="Email"/>
                <TextInput style={styles.loginTextInput} value="Password" />
                <TouchableHighlight
                    style={styles.loginSendButton}
                    onPress={() => { }}
                    underlayColor="#C70f66"
                >
                    <Text style={styles.loginSendButtonText}>ログインする</Text>
                </TouchableHighlight>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    loginScreen: {
        flex: 1,
        width: '100%',
        paddingTop: 78
    },

    loginTitle: {
        fontSize: 28,
        alignSelf: "center",
        marginTop: 24
    },

    loginTextInput: {
        height: 48,
        backgroundColor: "#eee",
        marginTop: 24,
        marginLeft: 24,
        marginRight: 24,
        paddingLeft: 16,
        fontSize: 18,
        borderColor: "#DDD",
        borderWidth: 1
    },

    loginSendButton: {
        height: 48,
        width: "70%",
        backgroundColor: "#E31676",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 24,
        borderRadius: 8
    },

    loginSendButtonText: {
        color: "white",
        fontSize: 18
    }
});