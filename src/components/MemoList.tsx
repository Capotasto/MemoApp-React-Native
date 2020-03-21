import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MemoList extends React.Component { 
    render() { 
        return (
            <View style={styles.memoList}>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイディア</Text>
                    <Text style={styles.memoDate}>2017/10/10</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイディア</Text>
                    <Text style={styles.memoDate}>2017/10/10</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイディア</Text>
                    <Text style={styles.memoDate}>2017/10/10</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイディア</Text>
                    <Text style={styles.memoDate}>2017/10/10</Text>
                </View>
                <View style={styles.memoListItem}>
                    <Text style={styles.memoTitle}>講座のアイディア</Text>
                    <Text style={styles.memoDate}>2017/10/10</Text>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
        paddingTop: 78
    },

    memoListItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        backgroundColor: "white"
    },

    memoTitle: {
        fontSize: 18,
        marginBottom: 4
    },

    memoDate: {
        fontSize: 12,
        color: '#a2a2a2'
    },

    memoAddButton: {
        height: 48,
        width: 48,
        backgroundColor: "#E31676",
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        right: 24,
        bottom: 24,
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    }

});
