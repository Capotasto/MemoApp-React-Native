import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CircleButton from '../elements/CircleButton';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import Memo from '../models/Memo';
import firebase from 'firebase';

interface Props {
    // memo: Memo,
}

interface State {
    memo: Memo
 }

export default class MemoEditScreen extends React.Component<NavigationInjectedProps, State>{

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        const memo = this.props.navigation.getParam('memo', '') as Memo
        //console.log(`memo: ${memo.toString()}`)
        this.state = {
            memo: memo
        }
    }

    onClickSave = () => { 
        console.log("onPressed onClickSave");
        console.log(`title: ${this.state.memo.title}`);
        console.log(`body: ${this.state.memo.body}`);
        
        const { currentUser } = firebase.auth()
        const uid = currentUser.uid
        if (uid.length == 0) {
            return
        }
        firebase.firestore()
            .collection(`users/${uid}/memos`)
            .doc(this.state.memo.key)
            .update({
                title: this.state.memo.title,
                body: this.state.memo.body
            })
            .then(() => {
                console.log("Updating Successful!") 
                this.props.navigation.goBack()
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <View style={styles.memoEditScreen} >
                <TextInput
                    style={styles.memoTitleEdtiTextInput}
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
                    style={styles.memoBodyEdtiTextInput}
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
                    onPress={ this.onClickSave }
                />
            </View >
        )
    }
}

const styles = StyleSheet.create({
    memoEditScreen: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee'
    },

    memoTitleEdtiTextInput: {
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        fontSize: 18,
    },

    memoBodyEdtiTextInput: {
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

