import SelectField from "@/components/login/SelectField";
import StringField from "@/components/login/StringField";
import LoginButton from "./LoginButtons";
import options from "../../mock/login.json";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";

interface IFormInput {
  username: string;
  password: string;
  role: { label: string; value: string };
}

const Login = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<IFormInput>();
  const submitForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    router.push("/reg-info");
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
            control={control}
            render={({ field }) => (
              <StringField label="نام کاربری" type="text" {...field} />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <StringField label="کلمه عبور" type="password" {...field} />
            )}
          />
          <Controller
            name="role"
            control={control}
            render={({ field }) => <SelectField options={options} {...field} />}
          />
        </div>
        <LoginButton label="ورود" />
      </div>
    </form>
  );
};

export default Login;
