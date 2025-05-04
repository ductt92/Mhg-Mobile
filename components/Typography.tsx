import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

type TypographyProps = {
  children: React.ReactNode;
  variant?: keyof typeof fontStyles;
  style?: TextStyle;
};

const fontStyles = StyleSheet.create({
  h1: { fontSize: 32, fontWeight: '700', lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: '600', lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: '500', lineHeight: 28 },
  body: { fontSize: 16, fontWeight: '400', lineHeight: 24 },
  caption: { fontSize: 12, fontWeight: '400', lineHeight: 18 },
});

const Typography = ({ children, variant = 'body', style }: TypographyProps) => {
  const { colors } = useTheme();
  return <Text style={[fontStyles[variant], { color: colors.text }, style]}>{children}</Text>;
};

export default Typography;