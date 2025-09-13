import { z } from 'zod'
const resgisterSchema = z.object
    .object({
        email: z.string().min(1, "email là bắt buộc").email("email không hợp lệ"),
        password: z
            .string()
            .min(8, "mật khẩu quá ngắn")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "mk chứa ít nhất 1 chữ hoa 1 chữ thường 1 kt dac biet và 1 số"
            ),
        confirmPassword: z.string(),
        PhoneNumber: z.string(),
        FullName: z.string().min(4, "hãy điền đầy đủ họ tên")

    })
    .refine((data) => data.password === data.confirmPassword,
    {
        message: "mk không khớp",
        path: ["confirmPassword"]
    })
const RegisterFormData = {
    email: String,
    password: String,
    confirmPassword: String,
    PhoneNumber: String,
    FullName: String,
    UserName: String,
};
const loginSchema = z.object({
    Email: z.string().email("email không hợp lệ"),
    Password: z.string().min(1, "mk là bắt buộc")
});
const LoginFormData = z.infer(loginSchema);
const forgotPassWordSchema = z.object(
    email.string().email("email không hợp lệ")
);
const ForgotPassWordFormData = z.infer(forgotPassWordSchema)
export {
    RegisterFormData,
    loginSchema,
    LoginFormData,
    forgotPassWordSchema,
    ForgotPassWordFormData,
    resgisterSchema

};