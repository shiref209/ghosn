import React from "react";
import AuthLayout from "../../Components/UI/AuthLayout/AuthLayout";
import { Box, Typography } from "@mui/material";
import AuthTextfield from "../../Components/AuthTextfield/AuthTextfield";
import PasswordTextfield from "../../Components/PasswordTextfield/PasswordTextfield";
import { CustomButton } from "../../Components/UI/CustomButton/CustomButton";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
type Props = {};
const Register = (props: Props) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required("برجاء إدخال الاسم"),
    phone: yup
      .number()
      .required("برجاء إدخال رقم الهاتف")
      .min(11, "رقم الهاتف يجب أن لا يقل عن 11 رقمًا"),
    email: yup
      .string()
      .email("برجاء إدخال بريد الكتروني صحيح ")
      .required("برجاء إدخال البريد الإلكتروني"),
    password: yup
      .string()
      .required("برجاء إدخال كلمة المرور")
      .min(6, "كلمة السر يجب ألا تقل عن 6 أحرف"),
  });
  const handleRegisterSubmit = (data: any) => {
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
    <AuthLayout title="إنشاء حساب">
      {/* Form fields */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", bsm: "row" },
          gap: "1rem",
          //   width: "100%",
        }}
      >
        <AuthTextfield name="name" label="الاسم" control={control} />
        <AuthTextfield name="phone" label="رقم التليفون" control={control} />
      </Box>
      <AuthTextfield name="email" label="البريد الإلكتروني" control={control} />
      <PasswordTextfield name="password" control={control} />
      {/* Submit Button */}
      <Box>
        <CustomButton
          onClick={handleSubmit(handleRegisterSubmit)}
          variant="contained"
        >
          إنشاء الحساب
        </CustomButton>
        <Typography color="#656565" mt="10px" textAlign="center">
          لديك حساب بالفعل؟
          <Link to="/login">
            <span style={{ color: "#476A11", textDecoration: "underline" }}>
              {" "}
              تسجيل الدخول
            </span>
          </Link>
        </Typography>
      </Box>
    </AuthLayout>
  );
};

export default Register;
