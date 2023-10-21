import { useCallback, useState } from "react";
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

  const handleSetValue: HandleSetValue = useCallback(
    (obj) => setValue((prev) => ({ ...prev, ...obj })),
    []
  );

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
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          {renderStep()}
          <div />
        </div>
      </div>
      {open && (
        <ModalOperation
          handleSetValue={handleSetValue}
          toggleModal={toggleModal}
          value={value} // pass just for get log after closing modal
        />
      )}
    </>
  );
};

export default Controlling;
