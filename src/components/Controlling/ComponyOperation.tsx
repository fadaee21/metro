import { IPostObject, StepType } from "@/type";
import PrevButton from "./PrevButton";
import companyOperation from "../../mock/companyOperation.json";
import TableCompany from "./TableCompany";
interface Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<StepType>>;
  toggleModal: () => void;
  handleSetValue: (obj: Partial<IPostObject>) => void;
}
const ComponyOperation = ({
  setCurrentStep,
  toggleModal,
  handleSetValue,
}: Props) => {
  const prevStep = () => {
    setCurrentStep("trainStep");
    handleSetValue({ trainSelecting: "" });
  };

  return (
    <>
      <PrevButton label="بازگشت به نام قطار" onClick={prevStep} />
      <TableCompany toggleModal={toggleModal} data={companyOperation} />
    </>
  );
};

export default ComponyOperation;
