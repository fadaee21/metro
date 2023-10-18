import SelectBoxLogin from "@/components/login/SelectBoxLogin";
import StringFieldLogin from "@/components/login/StringFieldLogin";
import LoginButton from "./LoginButtons";
import options from "@/mock/login.json";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
  role: { label: string; value: string };
}

const Login = () => {
  const router = useRouter();
  const { control, handleSubmit, watch } = useForm<IFormInput>();
  const routerHandle =
    watch("role.label") === "کنترل" ? "/controlling" : "/photographer";
  const disabledSubmit =
    !watch("username") || !watch("password") || !watch("role");
  const submitForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    router.push(routerHandle);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="w-398  ">
        <h1 className="text-2.3 text-center ">
          سامانه مانیتورینگ تبلیغات مترو همشهری
        </h1>
        <div className="space-y-6 mt-10">
          <Controller
            name="username"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <StringFieldLogin label="نام کاربری" type="text" {...field} />
            )}
          />
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <StringFieldLogin label="کلمه عبور" type="password" {...field} />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field }) => (
              <SelectBoxLogin options={options} {...field} />
            )}
          />
        </div>
        <LoginButton disabled={disabledSubmit} label="ورود" />
      </div>
    </form>
  );
};

export default Login;
