import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../../src/components/MemoList';
import CircleButton from "../../src/elements/CircleButton"

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

export default class MemoListScreen extends React.Component<NavigationInjectedProps>{
    user: firebase.User
    memoList: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.user = this.props.navigation.getParam('currenUser', '') as firebase.User
        console.log(this.user)
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
                this.memoList = querySnapshot
                // querySnapshot.forEach((doc) => { 
                //     console.log(doc.id, " => ", doc.data());
                // })
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