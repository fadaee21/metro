import { HandleSetValue } from "@/type";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  toggleModal: () => void;
  handleSetValue: HandleSetValue;
}

const ModalOperation = ({ toggleModal, handleSetValue }: Props) => {
  const [checkedState, setCheckedState] = useState({
    printing: false,
    installing: false,
    completed: false,
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedState({
      printing: false,
      installing: false,
      completed: false,
      [event.target.name]: event.target.checked,
    });
    handleSetValue({
      progressStep: event.target.value,
    });
  };

  return (
    <div className="bg-gray-950/50 w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden text-field-label text-sm">
      <div className="h-full w-full flex justify-center items-start transform translate-y-1/4">
        <div className="bg-white rounded-customRadius_1 w-80 h-56 flex justify-center items-center">
          <div className=" w-11/12 py-2 ">
            <div className="flex justify-between items-start px-3">
              <h6>عملیات</h6>
              <i onClick={toggleModal} className="cursor-pointer">
                <Image
                  src="assets/icons/Close Square.svg"
                  alt="close"
                  width={15}
                  height={15}
                />
              </i>
            </div>
            <div className="w-full h-0.5 bg-gray-200 " />
            <div className="px-5 py-2 ">
              <ul>
                <li className="my-4">
                  <input
                    type="checkbox"
                    name="printing"
                    id="printing"
                    className="ml-1"
                    checked={checkedState.printing}
                    value={1}
                    onChange={handleOnChange}
                  />
                  <label>در حال طراحی چاپ</label>
                </li>
                <li className="my-4">
                  <input
                    type="checkbox"
                    name="installing"
                    id="installing"
                    className="ml-1"
                    checked={checkedState.installing}
                    value={2}
                    onChange={handleOnChange}
                  />
                  <label>آماده سازی نصب</label>
                </li>
                <li className="my-4">
                  <input
                    type="checkbox"
                    name="completed"
                    id="completed"
                    className="ml-1"
                    checked={checkedState.completed}
                    value={3}
                    onChange={handleOnChange}
                  />
                  <label>نصب شد</label>
                </li>
              </ul>
            </div>
            <div className="w-full h-0.5 bg-gray-200 " />
            <div className="flex justify-between items-center px-5 mt-2">
              <label htmlFor="date">تاریخ:</label>
              <input
                type="date"
                name="date"
                id="date"
                onChange={(e) => handleSetValue({ date: e.target.value })}
              />
              <label htmlFor="time">ساعت:</label>
              <input
                type="time"
                name="time"
                id="time"
                onChange={(e) => handleSetValue({ time: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOperation;
