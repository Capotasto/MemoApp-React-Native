import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';

interface Props { 
    icon: String,
    iconColor: String,
    buttonStyle?: any;
}

interface State { }

const glyphMap = {
    pencil: '\uf303',
    plus: '\uf067',
    check:'\uf00c'
};
const expoAssetId = require("../../assets/fonts/fa-solid-900.ttf");
const CustomIcon = createIconSet(glyphMap, 'FontName', expoAssetId);

export default class CircleButton extends React.Component<Props, State> {
    render() {
        return (
            <View style={[styles.circleButton, this.props.buttonStyle]}>
                <CustomIcon
                    name={this.props.icon}
                    size={24}
                    color={this.props.iconColor}
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