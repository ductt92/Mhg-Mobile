// src/controllers/LoginController.ts
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { loginUser, userSchema } from '../models/UserModel';
import LoginView from '../view/LoginView';

const LoginContainer = () => {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async (data: { email: string, password: string }) => {
    try {
      const response:any = await loginUser(data);
      alert(response.message);
    } catch (error) {
      alert('Đăng nhập thất bại!');
    }
  };

  return (
    <LoginView
      control={control}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
    />
  );
};

export default LoginContainer;
