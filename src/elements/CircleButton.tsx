import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createIconSet } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';

interface Props {
    icon: String,
    iconColor: String,
    underlayColor: string,
    buttonStyle?: any,
    onPress: () => void
}

interface State { }

const glyphMap = {
    pencil: '\uf303',
    plus: '\uf067',
    check: '\uf00c'
};
const expoAssetId = require("../../assets/fonts/fa-solid-900.ttf");
const CustomIcon = createIconSet(glyphMap, 'FontName', expoAssetId);

export default class CircleButton extends React.Component<Props, State> {
    render() {
        return (
            <View style={[styles.circleButton, this.props.buttonStyle]}>
                <TouchableHighlight
                    style={styles.circleHilight}
                    underlayColor={this.props.underlayColor}
                    onPress={this.props.onPress}>
                    <View>
                        <CustomIcon
                            name={this.props.icon}
                            size={24}
                            color={this.props.iconColor}
                        />
                    </View>
                </TouchableHighlight>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    
    circleButton: {
        zIndex: 1,
        position: "absolute",
        height: 48,
        width: 48,
        right: 24,
        bottom: 24,
        backgroundColor: "#E31676",
        borderRadius: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
    },

    circleHilight: {
        height: 48,
        width: 48,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 24,
    },
});