
export const DefaultTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#34C759',
    danger: '#FF3B30',
    background: '#FFFFFF',
    text: '#000000',
    inputBorder: '#D1D1D6',
    placeholder: '#8E8E93',
  },
  fonts: {
    regular: 'Inter_400Regular', 
    bold: 'Inter_700Bold',   
    heading: 'Inter_700Bold',    
    body: 'Inter_400Regular', 
  },
};

export type AppTheme = typeof DefaultTheme;
