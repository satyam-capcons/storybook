// Button.stories.ts|tsx

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-native';

import CustomInput from './CustomInput';
import { useForm } from 'react-hook-form';
import { Button } from 'react-native';

const meta: Meta<typeof CustomInput> = {
  component: CustomInput,
};
export default meta;

type Story = StoryObj<typeof CustomInput>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const InputWithHooks = (args: any) => {

  const onSubmit = (data: any) => {
    console.log(data);
  }

  const { control, handleSubmit } = useForm();

  // Sets the hooks for both the label and primary props
  // Sets a click handler to change the label's value

  return (<><CustomInput control={control} rules={args.rules} placeholder={args.placeholder} name={args.name} />
    <Button title='Test Press' onPress={handleSubmit(onSubmit)} />
  </>);
};

export const Primary: Story = {
  render: (args) => <InputWithHooks  {...args} />
}

Primary.args = {
  rules: { required: true },
  placeholder: 'Primary',
  name: 'Primary',
}

