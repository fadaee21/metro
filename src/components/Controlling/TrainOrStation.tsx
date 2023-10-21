import React from "react";
import NavigatorField from "./NavigatorField";
import trainStationData from "../../mock/trainStation.json";
import { PropsSelectControlling } from "@/type";
// import PrevButton from "./PrevButton";

const TrainOrStation = ({
  setCurrentStep,
  handleSetValue,
}: PropsSelectControlling) => {
  const nextStep = (trainOrStation: string) => {
    setCurrentStep("lineStep");
    handleSetValue({ trainOrStation });
  };
  return (
    <>
      {/* <PrevButton /> */}
      <div className="h-6 mb-4" />
      {trainStationData.map((item: any) => (
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

export default TrainOrStation;
