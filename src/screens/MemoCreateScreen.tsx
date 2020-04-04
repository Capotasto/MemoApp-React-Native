import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationInjectedProps,
    withNavigation
} from 'react-navigation';
import firebase from 'firebase';

interface Prop {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    body: string;
}

export default class MemoCreateScreen extends React.Component<NavigationInjectedProps, State> {

    user: firebase.User

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.state = {
            body: ""
        }
        this.user = this.props.navigation.getParam('currenUser', '') as firebase.User
    }

    onClickCreate = () => {
        console.log(`body: ${this.state.body}`);
        const db = firebase.firestore();

        db.collection(`users/${this.user.uid}/memos`).add({
            title: "No Title",
            body: this.state.body,
            cratedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then((docRef) => {
            console.log(docRef.id)
        }).catch((error) => {
            console.log(error)
        })
        this.props.navigation.goBack()
    }
    
    render() {
        return (
            <View style={styles.memoCreateScreen}>
                <TextInput
                    style={styles.memoEdtiTextInput}
                    value={this.state.body}
                    onChangeText={
                        (text) => {
                            this.setState({
                                body: text
                            })
                        }
                    }
                />
                <CircleButton
                    icon={"check"}
                    iconColor={"white"}
                    underlayColor={"#9d0f52"}
                    buttonStyle={styles.memoAddButton}
                    onPress={this.onClickCreate}
                />
            </View>
        )

    }
}

const styles = StyleSheet.create({
    memoCreateScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    memoEdtiTextInput: {
        backgroundColor: '#eee',
        flex: 1,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },

    memoAddButton: {
        backgroundColor: "#E31676"
    }

});
