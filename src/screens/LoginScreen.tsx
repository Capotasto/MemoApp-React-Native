import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

interface State{
    email: string;
    password: string;
}

const LoginScreen: React.FC<State> = (navigation, state) => (
    <View style={styles.loginScreen}>
        <Text style={styles.loginTitle}　>ログイン</Text>
        <TextInput style={styles.loginTextInput} value={state.email} />
        <TextInput style={styles.loginTextInput} value={state.password} />
        <TouchableHighlight
            style={styles.loginSendButton}
            onPress={() =>
                navigation.navigate('Home')
            }
            underlayColor="#C70f66"
        >
            <Text style={styles.loginSendButtonText}>ログインする</Text>
        </TouchableHighlight>
    </View>
);

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

export default LoginScreen