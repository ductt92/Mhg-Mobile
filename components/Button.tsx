import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'large' | 'medium';
  loading?: boolean;
  disabled?: boolean;
};

const Button = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
}: ButtonProps) => {
  const { colors } = useTheme();

  const backgroundColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    danger: colors.danger,
    ghost: 'transparent',
  }[variant];

  const textColor = variant === 'ghost' ? colors.primary : '#fff';

  const buttonStyles = [
    styles.base,
    { backgroundColor },
    size === 'large' ? styles.large : styles.medium,
    disabled && styles.disabled,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
  },
  large: {
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  medium: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;