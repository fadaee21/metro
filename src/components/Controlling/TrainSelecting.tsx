import trainData from "../../mock/train.json";
import NavigatorField from "./NavigatorField";
import { PropsSelectControlling } from "@/type";
import PrevButton from "./PrevButton";

const TrainSelecting = ({
  setCurrentStep,
  handleSetValue,
}: PropsSelectControlling) => {
  const nextStep = (trainSelecting: string) => {
    setCurrentStep("componyOperation");
    handleSetValue({ trainSelecting });
  };
  const prevStep = () => {
    setCurrentStep("lineStep");
    handleSetValue({ lineSelecting: "" });
  };

  return (
    <>
      <PrevButton onClick={prevStep} label="بازگشت به خط" />
      {trainData.map((item: any) => (
        <NavigatorField
          key={item.value}
          value={item.value}
          label={item.label}
          onClick={() => nextStep(item.value.toString())}
        />
      ))}
    </>
  );
};

export default TrainSelecting;
