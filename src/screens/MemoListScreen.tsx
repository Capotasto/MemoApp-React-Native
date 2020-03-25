import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemoList from '../../src/components/MemoList';

import CircleButton from "../../src/elements/CircleButton"

const MemoListScreen = ({ navigation }) => (
    <View style={styles.memoListScreen}>
        <MemoList
            navigation={navigation}
        />
        <CircleButton
            icon={"plus"}
            iconColor={"white"}
            underlayColor={"#9d0f52"}
            buttonStyle={styles.memoAddButton}
            onPress={() => 
                navigation.navigate('MemoEdit')
            }
        />
    </View>
);

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

export default MemoListScreen