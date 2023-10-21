import { HandleSetValue, IPostObject } from "@/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from "react-date-object/calendars/gregorian";
import gregorian_en from "react-date-object/locales/gregorian_en";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
interface Props {
  toggleModal: () => void;
  handleSetValue: HandleSetValue;
  value: IPostObject;
}

const ModalOperation = ({
  toggleModal,
  handleSetValue,
  value: objectValueToPost,
}: Props) => {
  const [checkedState, setCheckedState] = useState({
    printing: false,
    installing: false,
    completed: false,
  });
  const [dateVal, setDateVal] = useState<any>(new DateObject());
  const [timeVal, setTimeVal] = useState<any>(new DateObject());

  useEffect(() => {
    const date = dateVal.convert(gregorian, gregorian_en).format("YYYY/MM/DD");
    handleSetValue({ date });
  }, [dateVal, handleSetValue]);
  useEffect(() => {
    handleSetValue({ time: timeVal.format("HH:mm a") });
  }, [timeVal, handleSetValue]);

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

  const closeClick = () => {
    toggleModal();
    console.log(objectValueToPost);
  };

  return (
    <div className="bg-gray-950/50 w-full h-full absolute top-0 left-0 flex justify-center items-center overflow-hidden text-field-label text-sm">
      <div className="h-full w-full flex justify-center items-start transform translate-y-1/4">
        <div className="bg-white rounded-customRadius_1 w-80 h-56 flex justify-center items-center">
          <div className=" w-11/12 py-2 ">
            <div className="flex justify-between items-start px-3">
              <h6>عملیات</h6>
              <i onClick={closeClick} className="cursor-pointer">
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
                  <label className="label_checkBox">
                    <input
                      type="checkbox"
                      name="printing"
                      id="printing"
                      className="ml-1"
                      checked={checkedState.printing}
                      value={1}
                      onChange={handleOnChange}
                    />
                    <span className="span_checkBox" />
                    در حال طراحی چاپ
                  </label>
                </li>
                <li className="my-4">
                  <label className="label_checkBox">
                    <input
                      type="checkbox"
                      name="installing"
                      id="installing"
                      className="ml-1"
                      checked={checkedState.installing}
                      value={2}
                      onChange={handleOnChange}
                    />
                    <span className="span_checkBox" />
                    آماده سازی نصب
                  </label>
                </li>
                <li className="my-4">
                  <label className="label_checkBox">
                    <input
                      type="checkbox"
                      name="completed"
                      id="completed"
                      className="ml-1"
                      checked={checkedState.completed}
                      value={3}
                      onChange={handleOnChange}
                    />
                    <span className="span_checkBox" />
                    نصب شد
                  </label>
                </li>
              </ul>
            </div>
            <div className="w-full h-0.5 bg-gray-200 " />
            <div className="flex justify-between items-center px-2 mt-2">
              <div className="flex items-center">
                <label htmlFor="date">تاریخ:</label>
                <DatePicker
                  id="data"
                  calendar={persian}
                  locale={persian_fa}
                  style={{
                    width: "6rem",
                    marginRight: "3px",
                  }}
                  onChange={setDateVal}
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="time">ساعت:</label>
                <DatePicker
                  id="time"
                  disableDayPicker
                  format="hh:mm A"
                  type="input"
                  plugins={[<TimePicker key={"time"} hideSeconds />]}
                  style={{
                    width: "4.5rem",
                    marginRight: "3px",
                  }}
                  onChange={setTimeVal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOperation;
