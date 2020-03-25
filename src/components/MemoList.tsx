import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import CircleButton from '../elements/CircleButton';

const MemoList = ({ navigation }) => (
    <View style={styles.memoList}>
        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>講座のアイディア</Text>
                <Text style={styles.memoDate}>2017/10/10</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>講座のアイディア</Text>
                <Text style={styles.memoDate}>2017/10/10</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>講座のアイディア</Text>
                <Text style={styles.memoDate}>2017/10/10</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>講座のアイディア</Text>
                <Text style={styles.memoDate}>2017/10/10</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => navigation.navigate('MemoDetail')}>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>講座のアイディア</Text>
                <Text style={styles.memoDate}>2017/10/10</Text>
            </View>
        </TouchableHighlight>
    </View>
);

const styles = StyleSheet.create({
    memoList: {
        width: '100%',
        flex: 1,
        backgroundColor: '#fffdf6',
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
    }

});

export default MemoList;