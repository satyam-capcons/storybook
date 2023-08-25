// Button.stories.ts|tsx

import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react-native';

import Button from './Button';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);
  const control = useForm();

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onPress={handleOnChange} text={'ldklgkfld'} control={control} />;
};

export const Primary: Story = {
  render: () => <ButtonWithHooks />,
  args: {
    text: 'Primary',
  }
};