import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
//import { FontAwesomeIcon } from 'expo-fontawesome';
//import { faPencilAlt } from '@fortawesome/free-sol/id-svg-icons';

interface Props { 
    icon: String,
    buttonStyle?: any;
    textStyle?: any;
}

interface State {}

export default class CircleButton extends React.Component<Props, State> {
    render() {
        return (
            <View style={[styles.circleButton, this.props.buttonStyle]}>
                {/* <Text style={[styles.circleButtonText, this.props.textStyle]}>
                    {this.props.text}
                </Text> */}
                <FontAwesome.Button style={styles.circleButtonIcon}
                    name={this.props.icon}
                    color="#E31676" //#E31676
                    backgroundColor="clear"
                />
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

    circleButtonIcon: {
        justifyContent: "center",
        alignItems: "center",
    },

    circleButtonText: {
        fontSize: 32,
        lineHeight: 32,
        color: "white"
    }

});