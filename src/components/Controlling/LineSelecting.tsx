import lineData from "../../mock/line.json";
import NavigatorField from "./NavigatorField";
import { PropsSelectControlling } from "@/type";
import PrevButton from "./PrevButton";

const LineSelecting = ({
  setCurrentStep,
  handleSetValue,
}: PropsSelectControlling) => {
  const nextStep = (lineSelecting: string) => {
    setCurrentStep("trainStep");
    handleSetValue({ lineSelecting });
  };
  const prevStep = () => {
    setCurrentStep("trainOrStation");
    handleSetValue({ trainOrStation: "" });
  };

  return (
    <>
      <PrevButton onClick={prevStep} label="بازگشت به فضای تبلیغاتی" />
      {lineData.map((item: any) => (
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

export default LineSelecting;
