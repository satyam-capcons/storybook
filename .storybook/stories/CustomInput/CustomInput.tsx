/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    TextInput,
    TextInputProps,
    View,
    Text,
    Dimensions,
} from 'react-native';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import colors from '../../../theme/colors'
import fonts from '../../../theme/fonts'

interface PropType<ContentType extends FieldValues> extends TextInputProps {
    // All the existing propType props
    icon?: string;
    name: Path<ContentType>;
    rules: {};
    control: Control<ContentType, object>;
    containerStyle?: {};
    defaultValue?: string;
    text?: string;
    inputContainerStyle?: {};
}

const width = Dimensions.get('window').width;

const ControlledInput = <ContentType extends FieldValues>({
    name,
    rules = {},
    control,
    containerStyle,
    defaultValue,
    inputContainerStyle,
    ...restTextInputProps
}: PropType<ContentType>) => {
    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { value }, fieldState: { error, invalid } }) => (
                    <>
                        <View style={[styles.root, containerStyle]}>
                            <TextInput
                                {...restTextInputProps}
                                style={[styles.inputContainer, inputContainerStyle]}
                                defaultValue={defaultValue}
                                value={value as string}
                            />
                        </View>
                        {(error || invalid) && (
                            <Text style={styles.error}>
                                {error?.message || 'This field is required'}
                            </Text>
                        )}
                    </>
                )}
            />
        </>
    );
};

export default ControlledInput;

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        borderColor: colors.textField,
        borderWidth: 0.5,
        width: '100%',
        height: 50,
        marginVertical: 10,
    },
    inputContainer: {
        textAlign: 'left',
        width: '80%',
        color: colors.body,
        padding: 0,
        margin: 0,
        height: 50,
        borderWidth: 0,

        fontSize: fonts.size.md,
    },
    error: {
        color: 'red',
        fontSize: fonts.size.s,
        paddingHorizontal: 15,
    },
});
