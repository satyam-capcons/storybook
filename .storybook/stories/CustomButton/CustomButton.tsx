/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {
    StyleSheet,
    Text,
    GestureResponderEvent,
    Image,
    ImageSourcePropType,
    StyleProp,
    ImageStyle,
    Dimensions,
    View,
    ViewStyle,
    TextStyle,
    TouchableOpacity
} from 'react-native';
import React from 'react';
import colors from '../../../theme/colors'
import fonts from '../../../theme/fonts'


interface PropType {
    title: string;
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    //gradientColors?: string[];
    leftImage?: ImageSourcePropType;
    rightImage?: ImageSourcePropType;
    leftImageStyle?: StyleProp<ImageStyle>;
    rightImageStyle?: StyleProp<ImageStyle>;
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const CustomButton = (props: PropType) => {
    return (
        <>
            <TouchableOpacity onPress={props.onPress}>
                <View style={[styles.button, props.style]}>
                    {props.leftImage && (
                        <Image source={props.leftImage} style={props.leftImageStyle} />
                    )}

                    <Text style={[styles.text, props.textStyle]}>{props.title}</Text>
                    {props.rightImage && (
                        <Image source={props.rightImage} style={props.rightImageStyle} />
                    )}
                </View>
            </TouchableOpacity>
        </>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    text: {
        fontSize: fonts.size.md,
        fontWeight: fonts.weight.thick,
        color: colors.white,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 50,
        borderRadius: 30,
        marginVertical: 10,
        // backgroundColor: 'red',
        backgroundColor: colors.primary,
        //overflow: 'hidden',
    },
});
