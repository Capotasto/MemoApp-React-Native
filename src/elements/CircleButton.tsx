import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props { 
    text: String,
}

interface State {}

export default class CircleButton extends React.Component<Props, State> {
    render() {
        return (
            <View style={styles.circleButton}>
                <Text style={styles.circleButtonText}>
                    {this.props.text}
                </Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({

    circleButton: {
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
    },

    circleButtonText: {
        fontSize: 32,
        lineHeight: 32,
        color: "white"
    }

});