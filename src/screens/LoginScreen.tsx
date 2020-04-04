import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationInjectedProps,
    withNavigation
} from 'react-navigation';

interface Prop {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    email: string
    password: string;
}

export default class LoginScreen extends Component<NavigationInjectedProps, State> {
    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.state = {
            email: "test@test.com",
            password: "testtest"
        }
    }

    onClickLogin = (argArray: string[]) => {
        console.log("onPressed Sign up");
        console.log(`email: ${this.state.email}`);
        console.log(`password: ${this.state.password}`);

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.password
        )
            .then((user) => {
                console.log("Success Sign up!", user)
                this.props.navigation.navigate('Home', { currenUser: user.user })
            }).catch(function (error) {
                // Handle Errors here.
                console.log(error)
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...
            });

    }

    render() {
        return (
            <View style={styles.loginScreen}>
                <Text style={styles.loginTitle}　>ログイン</Text>
                <TextInput
                    style={styles.loginTextInput}
                    value={this.state.email}
                    onChangeText={
                        (text) => {
                            this.setState({
                                email: text
                            })
                        }
                    }
                    placeholder="Email"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.loginTextInput}
                    value={this.state.password}
                    onChangeText={
                        (text) => {
                            this.setState({
                                password: text
                            })
                        }
                    }
                    placeholder="Password"
                    autoCorrect={false}
                    secureTextEntry
                />
                <TouchableHighlight
                    style={styles.loginSendButton}
                    onPress={
                        this.onClickLogin.bind(this, [this.state.email, this.state.password])
                    }
                    underlayColor="#C70f66"
                >
                    <Text style={styles.loginSendButtonText}>ログインする</Text>
                </TouchableHighlight>
            </View>
        )
    }
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