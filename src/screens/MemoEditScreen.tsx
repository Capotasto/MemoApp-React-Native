import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


const MemoEditScreen = ({ navigation }) => (
    <View style={styles.memoEditScreen}>
        <TextInput style={styles.memoEdtiTextInput} />
        <CircleButton
            icon={"check"}
            iconColor={"white"}
            underlayColor={"#9d0f52"}
            buttonStyle={styles.memoAddButton}
            onPress={() =>
                navigation.goBack()
            }
        />
    </View>
)

const styles = StyleSheet.create({
    memoEditScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },

    memoEdtiTextInput: {
        backgroundColor: '#eee',
        flex: 1,
        width: '100%',
        paddingTop: 24,
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16
    },

    memoAddButton: {
        backgroundColor: "#E31676"
    }

});

export default MemoEditScreen
