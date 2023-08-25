// Button.stories.ts|tsx

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-native';

import CustomButton from './CustomButton';
import colors from '../../../theme/colors';

const meta: Meta<typeof CustomButton> = {
    component: CustomButton,
};
export default meta;

type Story = StoryObj<typeof CustomButton>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
// const ButtonWithHooks = (args: any) => {
//     // Sets the hooks for both the label and primary props
//     // Sets a click handler to change the label's value

//     return <CustomButton title={args.title} style={args.style} textStyle={args.textStyle} />;
// };

export const Primary: Story = {
    render: (args: any) => <CustomButton title={args.title} style={args.style} textStyle={args.textStyle} />
}

Primary.args = {
    title: 'Primary',
    style: {},
    textStyle: {},

}


export const Secondary: Story = {
    render: (args: any) => <CustomButton title={args.title} style={args.style} textStyle={args.textStyle} />
}

Secondary.args = {
    title: 'Secondary',
    style: { backgroundColor: colors.white },
    textStyle: { color: colors.body, fontWeight: 'normal' },

}


