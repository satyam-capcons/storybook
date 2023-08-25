import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onPress: () => void;
  text: string;
  style?: any;
  primary?: boolean;
  control: any
}
const MyButton = (props: Props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'purple',
    borderRadius: 8,
  },
  text: { color: 'white' },
});
