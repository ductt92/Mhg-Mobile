import * as yup from 'yup';

export const userSchema = yup.object().shape({
  email: yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
  password: yup.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự').required('Mật khẩu là bắt buộc'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
    .required('Xác nhận mật khẩu là bắt buộc'),
  rememberMe: yup.boolean(),
});

export const loginUser = (data: { email: string, password: string }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: `Chào mừng ${data.email}` });
    }, 1000);
  });
};
