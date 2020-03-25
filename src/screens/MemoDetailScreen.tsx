import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

interface Props {
    // memo: Memo,
}

interface State { }

const MemoDetailScreen = ({ navigation }) => (
    <View style={styles.memoDetailScreen}>
        <View style={styles.memoHeader} >
            <Text style={styles.memoHeaderTitle}>
                講座のアイディア
                    </Text>
            <Text style={styles.memoHeaderDate}>
                {/* {this.props.memo.date.toLocaleString()}  */}
                2019/10/10
                    </Text>
        </View>

        <CircleButton
            icon={"pencil"}
            iconColor={"#E31676"}
            underlayColor={"#eee"}
            buttonStyle={styles.memoEditButton}
            onPress={() =>
                navigation.navigate('MemoEdit')
            }
        />

        <View style={styles.memoDetail} >
            <Text>
                講座のアイディアです。
                これは本文です。
                マークダウンも書けるようにします。
                    </Text>
        </View>
    </View>

);

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

export default MemoDetailScreen