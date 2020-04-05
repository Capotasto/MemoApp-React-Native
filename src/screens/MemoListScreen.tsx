import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../../src/components/MemoList';
import CircleButton from "../../src/elements/CircleButton";
import Memo from '../models/Memo';

import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationInjectedProps
} from 'react-navigation';
import firebase from 'firebase';

interface Prop {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State { 
    memoList: Memo[] 
}

export default class MemoListScreen extends React.Component<NavigationInjectedProps, State>{
    user: firebase.User

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.user = this.props.navigation.getParam('currenUser', '') as firebase.User
        console.log(this.user)

        this.state = {
            memoList: [] 
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        const uid = this.user.uid
        if (uid.length == 0) {
            return
        }

        db.collection(`users/${this.user.uid}/memos`)
            .get()
            .then((querySnapshot) => {
                const tempList: Memo[] = []
                querySnapshot.forEach((doc) => { 
                    console.log(`doc.get("cratedAt"): ${doc.get("cratedAt").toDate()}`)
                    const memo = new Memo(
                        doc.id,
                        doc.get("title"),
                        doc.get("cratedAt").toDate(),
                        doc.get("body"))
                    tempList.push(memo)
                })
                this.setState({
                    memoList: tempList
                })
            }).catch((error) => {
                console.log(error)
            })
    }

    onClickAddItem() {
        const db = firebase.firestore();
        const uid = this.user.uid
        if (uid.length == 0) {
            return
        }

        db.collection(`users/${this.user.uid}/memos`).add({
            title: "サンプル",
            cratedAt: firebase.firestore.FieldValue.serverTimestamp(),
            body: "えええええええええ！！！",
        }).then((docRef) => {
            console.log(docRef.id)
        }).catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            <View style={styles.memoListScreen}>
                <MemoList
                    memoList={this.state.memoList}
                    navigation={this.props.navigation}
                />
                <CircleButton
                    icon={"plus"}
                    iconColor={"white"}
                    underlayColor={"#9d0f52"}
                    buttonStyle={styles.memoAddButton}
                    onPress={() =>
                        this.onClickAddItem()
                        //this.props.navigation.navigate('MemoEdit')
                    }
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    memoListScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    memoAddButton: {
        backgroundColor: "#E31676"
    }

});