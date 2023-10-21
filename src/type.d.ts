export type StepType =
  | "trainOrStation"
  | "lineStep"
  | "trainStep"
  | "componyOperation";

export interface ICompany {
  id: number;
  companyName: string;
  commercialSpace: string;
  codeSpace: string;
}

export interface IPostObject {
  trainOrStation: string;
  lineSelecting: string;
  trainSelecting: string;
  progressStep: string;
  date: string;
  time: string;
}

export type HandleSetValue = (obj: Partial<IPostObject>) => void;
export interface PropsSelectControlling {
  setCurrentStep: Dispatch<SetStateAction<StepType>>;
  handleSetValue: HandleSetValue;
}


export interface IFormInput {
  username: string;
  password: string;
  role: { label: string; value: string };
}