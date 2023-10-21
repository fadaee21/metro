import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import SelectiveButton from "@/components/photographer/SelectiveButtons";
import SelectBox from "@/components/photographer/SelectBox";
import stationName from "@/mock/stationName.json";
import trainName from "@/mock/train.json";
import trainStationOption from "@/mock/trainStation.json";
import commercialSpace from "@/mock/commercialSpace.json";
import StringField from "@/components/photographer/StringField";
import ImageUpload from "@/components/photographer/ImageUpload";
import SubmitButton from "@/components/photographer/SubmitButton";
// import StringField from "@/components/login/StringFieldLogin";
interface IFormInput {
  trainStation: { value: number; label: string };
  commercialSpace: { value: number; label: string } | undefined;
  commercialCode: string;
  image: string;
}

const Photographer = () => {
  const [imageVal, setImageVal] = useState<any>(null);
  const [buttonState, setButtonState] = useState<null | number>(null);
  const [success, setSuccess] = useState(false);
  const { control, handleSubmit, watch, reset } = useForm<IFormInput>();
  const submitForm: SubmitHandler<IFormInput> = (data) => {
    if (success) {
      // clear all data for POSTing new data
      reset();
      setButtonState(null);
      return;
    }
    const formData = new FormData();
    formData.append(
      "trainStation",
      data.trainStation ? data.trainStation.value.toString() : ""
    );
    formData.append(
      "commercialSpace",
      data.commercialSpace ? data.commercialSpace.value.toString() : ""
    );
    formData.append("commercialCode", data.commercialCode);
    formData.append("image", imageVal || "");
    console.log(formData);
    setSuccess(true);
  };

  const handleTrainStationClick = (value: number) => {
    setButtonState(value);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className=" w-500 flex flex-col  items-center">
        <h1 className="text-3xl text-center ">ثبت اطلاعات</h1>
        <div className="space-y-6 mt-10 w-full" key={buttonState}>
          {/*this key help to rerender component after changing the state for resetting the form */}
          <div className="flex justify-between">
            {trainStationOption.map(({ label, value }) => (
              <SelectiveButton
                onClick={() => handleTrainStationClick(value)}
                label={label}
                active={buttonState === value}
                key={value}
              />
            ))}
          </div>
          <Controller
            name="trainStation"
            control={control}
            render={({ field }) => (
              <SelectBox
                isDisabled={buttonState === null}
                fieldValue={field.value}
                placeholder={
                  buttonState !== null
                    ? trainStationOption.find((i) => i.value === buttonState)
                        ?.label
                    : "نام ایستگاه / قطار"
                }
                options={buttonState === 1 ? stationName : trainName}
                {...field}
              />
            )}
          />
          <Controller
            name="commercialSpace"
            control={control}
            render={({ field }) => (
              <SelectBox
                fieldValue={field.value}
                isDisabled={!watch("trainStation")}
                placeholder={"نام فضای تبلیغاتی"}
                options={commercialSpace}
                {...field}
              />
            )}
          />
          <Controller
            name="commercialCode"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <StringField
                disabled={!watch("commercialSpace")}
                label="کد فضای تبلیغاتی"
                type="text"
                {...field}
              />
            )}
          />
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageUpload
                disabled={!watch("commercialCode")}
                {...field}
                setImageVal={setImageVal}
              />
            )}
          />
          <>
            {success && !!watch("image") && (
              <SubmitButton type="add-new" label="ثبت اطلاعات جدید" />
            )}
            {/* {success && (
              <div className="flex justify-between">
                <SubmitButton
                  color="white"
                  bgColor="green"
                  size={48}
                  label="ثبت اطلاعات جدید"
                />
                <SubmitButton
                  color="black"
                  bgColor="orange"
                  size={48}
                  label="ویرaaaaaایش اطلاعات"
                />
              </div>
            )} */}
            {!!watch("image") && !success && (
              <SubmitButton type="admit" label="ثبت اطلاعات" />
            )}
          </>
        </div>
      </div>
    </form>
  );
};

export default Photographer;
