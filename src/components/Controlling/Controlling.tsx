import { useState } from "react";
import TrainOrStation from "./TrainOrStation";
import LinsSelecting from "./LineSelecting";
import TrainSelecting from "./TrainSelecting";
import { HandleSetValue, IPostObject, StepType } from "@/type";
import ComponyOperation from "./ComponyOperation";
import ModalOperation from "./ModalOperation";

const Controlling = () => {
  const [currentStep, setCurrentStep] = useState<StepType>("trainOrStation");
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);
  const [value, setValue] = useState<IPostObject>({
    trainOrStation: "",
    lineSelecting: "",
    trainSelecting: "",
    progressStep: "",
    date: "",
    time: "",
  });

  const handleSetValue: HandleSetValue = (obj) =>
    setValue((prev) => ({ ...prev, ...obj }));

  const renderStep = () => {
    switch (currentStep) {
      case "trainOrStation":
        return (
          <TrainOrStation
            handleSetValue={handleSetValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case "lineStep":
        return (
          <LinsSelecting
            handleSetValue={handleSetValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case "trainStep":
        return (
          <TrainSelecting
            handleSetValue={handleSetValue}
            setCurrentStep={setCurrentStep}
          />
        );
      case "componyOperation":
        return (
          <ComponyOperation
            handleSetValue={handleSetValue}
            toggleModal={toggleModal}
            setCurrentStep={setCurrentStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="w-9/12 flex flex-col items-center">
        {renderStep()}
        <div className="h-80" />
      </div>
      {open && <ModalOperation handleSetValue={handleSetValue} toggleModal={toggleModal} />}
    </>
  );
};

export default Controlling;
