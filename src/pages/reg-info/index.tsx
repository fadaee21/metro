import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import SelectiveButton from "@/components/reg-info/SelectiveButtons";
import SelectBox from "@/components/reg-info/SelectBox";
interface IFormInput {
  username: string;
  password: string;
  role: { label: string; value: string };
}
const places = [
  {
    label: "ایستگاه",
    value: 1,
  },
  {
    label: "قطار",
    value: 2,
  },
];

const RegInfo = () => {
  const [buttonState, setButtonState] = useState<null | number>(null);
  const router = useRouter();
  const { control, handleSubmit } = useForm<IFormInput>();
  const submitForm: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
    router.push("/reg-info");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="border border-red-500 w-500 flex flex-col  items-center">
        <h1 className="text-3xl text-center ">ثبت اطلاعات</h1>
        <div className="space-y-6 mt-10 w-full ">
          <div className="flex justify-between">
            {places.map(({ label, value }) => (
              <SelectiveButton
                onClick={() => setButtonState(value)}
                label={label}
                active={buttonState === value}
                key={value}
              />
            ))}
          </div>
          <SelectBox placeholder="انتخاب کنید" options={places} />
        </div>
      </div>
    </form>
  );
};

export default RegInfo;
