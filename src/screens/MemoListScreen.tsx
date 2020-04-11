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
import firebase, { firestore } from 'firebase';

interface Prop {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State { 
    memoList: Memo[] 
}

export default class MemoListScreen extends React.Component<NavigationInjectedProps, State>{

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.state = {
            memoList: [] 
        }
    }

    componentDidMount() {
        const { currentUser } = firebase.auth()
        const db = firebase.firestore();
        const uid = currentUser.uid
        console.log(`uid: ${uid}`)
        if (uid.length == 0) {
            return
        }

        db.collection(`users/${uid}/memos`)
            .onSnapshot((snapshot) => { 
                const tempList: Memo[] = []
                console.log(`snapshot: ${snapshot}`) 
                snapshot.forEach((doc) => {
                    const memo = new Memo(
                        doc.id,
                        doc.get("title"),
                        doc.get("cratedAt")?.toDate() ?? new Date(),
                        doc.get("body"))
                    console.log(`memo: ${memo}`)
                    tempList.push(memo)
                })
                this.setState({
                    memoList: tempList
                })
            }, (error) => {
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
                        this.props.navigation.navigate('MemoCreate')
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