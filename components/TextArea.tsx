import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const TextArea = (props: TextInputProps) => {
  const { colors } = useTheme();

  return (
    <TextInput
      {...props}
      multiline
      numberOfLines={4}
      placeholderTextColor={colors.placeholder}
      style={[styles.textarea, {
        borderColor: colors.inputBorder,
        color: colors.text,
      }, props.style]}
    />
  );
};

const styles = StyleSheet.create({
  textarea: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlignVertical: 'top',
  },
});

export default TextArea;