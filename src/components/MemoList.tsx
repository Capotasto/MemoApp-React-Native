import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
    NavigationInjectedProps
} from 'react-navigation';
import firebase from 'firebase';
import Memo from '../models/Memo';

interface Prop {
    memoList: Memo[];
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export default class MemoList extends React.Component<Prop>{
    componentDidMount() {
        console.log(`memoList:  ${this.props.memoList}`)
    }

    renderItem = ({ item }: { item: Memo}) => (
        <TouchableHighlight onPress={() =>
            this.props.navigation.navigate('MemoDetail', {memo: item})
        }>
            <View style={styles.memoListItem}>
                <Text style={styles.memoTitle}>{item.title}</Text>
                <Text style={styles.memoDate}>{item.date.toLocaleString()}</Text>
            </View>
        </TouchableHighlight > 
    )

    render() {
        return (
            <View style={styles.memoList} >
                <FlatList<Memo>
                    data={this.props.memoList}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                />
            </View >
        )
    }
}

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