import { Box, Typography } from "@mui/material";
import PasswordTextfield from "../../Components/PasswordTextfield/PasswordTextfield";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../../Components/UI/CustomButton/CustomButton";
import AuthLayout from "../../Components/UI/AuthLayout/AuthLayout";
import AuthTextfield from "../../Components/AuthTextfield/AuthTextfield";
import { Link } from "react-router-dom";

const Login = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("برجاء إدخال بريد الكتروني صحيح ")
      .required("برجاء إدخال البريد الإلكتروني"),
    password: yup
      .string()
      .required("برجاء إدخال كلمة المرور")
      .min(6, "كلمة السر يجب ألا تقل عن 6 أحرف"),
  });

  const handleLoginSubmit = (data: any) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(data);
  };
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <AuthLayout title="تسجيل الدخول">
      {/* Form fields */}
      <AuthTextfield name="email" label="البريد الإلكتروني" control={control} />
      <PasswordTextfield name="password" control={control} />

      {/* Submit Button */}
      <Box>
        <CustomButton
          onClick={handleSubmit(handleLoginSubmit)}
          variant="contained"
        >
          تسجيل الدخول
        </CustomButton>
        <Typography color="#656565" mt="10px" textAlign="center">
          ليس لديك حساب؟
          <Link to="/register">
            <span style={{ color: "#476A11", textDecoration: "underline" }}>
              سجل الان
            </span>
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default Login;
