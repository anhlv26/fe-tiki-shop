import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc nhập email"),
  password: Yup.string().min(6, "Mật khẩu phải dài ít nhất 6 ký tự").required("Bắt buộc nhập mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Mật khẩu không khớp')
    .required('Bắt buộc xác nhận mật khẩu'),
});

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Email không hợp lệ").required("Bắt buộc nhập email"),
  password: Yup.string().min(6, "Mật khẩu phải dài ít nhất 6 ký tự").required("Bắt buộc nhập mật khẩu"),
});