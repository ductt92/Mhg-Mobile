import Button from '@/components/Button';
import Input from '@/components/Input';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import styles from '../styles/login-style';

interface LoginViewProps {
  control: any;
  handleSubmit: any;
  errors: any;
  onSubmit: (data:any) => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ control, handleSubmit, errors, onSubmit }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Đăng nhập</Text>

    <View style={styles.formContainer}>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Mật khẩu"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
        name="password"
      />
      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder="Xác nhận mật khẩu"
            value={value}
            onChangeText={onChange}
            secureTextEntry
          />
        )}
        name="confirmPassword"
      />
      {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}

     
      <Button title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
    </View>
  </ScrollView>
);

export default LoginView;
