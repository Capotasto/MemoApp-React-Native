import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationInjectedProps
} from 'react-navigation';
import firebase from 'firebase';
import Memo from '../models/Memo';

interface Props {
    // memo: Memo,
}

interface State { }

export default class MemoDetailScreen extends React.Component<NavigationInjectedProps, State>{ 
    
    memo: Memo

    constructor(props: Readonly<NavigationInjectedProps>) {
        super(props);
        this.memo = this.props.navigation.getParam('memo', '') as Memo
    }

    render() {
        return (
            <View style={styles.memoDetailScreen}>
                <View style={styles.memoHeader} >
                    <Text style={styles.memoHeaderTitle}>
                        {this.memo.title}
                    </Text>
                    <Text style={styles.memoHeaderDate}>
                        {this.memo.date.toLocaleDateString()}
                    </Text>
                </View>

                <CircleButton
                    icon={"pencil"}
                    iconColor={"#E31676"}
                    underlayColor={"#eee"}
                    buttonStyle={styles.memoEditButton}
                    onPress={() => {
                        console.log("MemoEdit");
                        this.props.navigation.navigate('MemoEdit', {memo: this.memo})
                        }
                    }
                />

                <View style={styles.memoDetail} >
                    <Text>
                        {this.memo.body}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    memoDetailScreen: {
        flex: 1,
        width: '100%'
    },

    memoHeader: {
        height: 120,
        backgroundColor: '#17373C',
        paddingLeft: 16,
        justifyContent: "center",
    },

    memoHeaderTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },

    memoHeaderDate: {
        marginTop:8,
        color: "white",
        fontSize: 12
    },

    memoEditButton: {
        top: 94,
        right: 24,
        backgroundColor: "white"
    },

    memoEditButtonText: {
        color: "#E31676"
    },

    memoDetail: {
        padding: 36
    } 

});