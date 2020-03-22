import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../../src/components/MemoList';

import CircleButton from "../../src/elements/CircleButton"

export default class MemoListScreen extends React.Component {
    render() {
        return (
            <View style={styles.memoListScreen}>
                <MemoList/>
                <CircleButton
                    icon={"plus"}
                    iconColor={"white"}
                    buttonStyle={styles.memoAddButton}
                />
            </View>
        )
    };
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