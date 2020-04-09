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
import Memo from '../models/Memo';

interface Prop {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
    memo: Memo
}

export default class MemoCreateScreen extends React.Component<NavigationInjectedProps, State> {

    user: firebase.User

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        const memo = new Memo(
            '',
            '',
            new Date(),
            ''
        )
        this.state = {
            memo: memo,
        }
    }

    onClickCreate = () => {
        const db = firebase.firestore();
        const { currentUser } = firebase.auth()
        const uid = currentUser.uid
        if (uid.length == 0) {
            return
        }
        db.collection(`users/${uid}/memos`).add({
            title: this.state.memo.title,
            body: this.state.memo.body,
            cratedAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then((docRef) => {
            console.log(docRef.id)
            this.props.navigation.goBack()
        }).catch((error) => {
            console.log(error)
        })
    }
    
    render() {
        return (
            <View style={styles.memoCreateScreen}>
                <TextInput
                    style={styles.memoTitleEditTextInput}
                    placeholder="タイトル"
                    value={this.state.memo.title}
                    onChangeText={
                        (text) => {
                            this.state.memo.title = text
                            this.setState({
                                memo: this.state.memo
                            })
                        }
                    }
                />

                <TextInput
                    style={styles.memoBodyEditTextInput}
                    placeholder="メモ"
                    value={this.state.memo.body}
                    onChangeText={
                        (text) => {
                            this.state.memo.body = text
                            this.setState({
                                memo: this.state.memo
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
        width: '100%',
        backgroundColor: '#eee'
    },

    memoTitleEditTextInput: {
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 18,
    },

    memoBodyEditTextInput: {
        backgroundColor: '#eee',
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
